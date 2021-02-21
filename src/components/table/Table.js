import SheetComponent from '@core/SheetComponent';
import {resizeHandler} from './handlers';
import {createTable} from './tableTemplate';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: Table,
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    // 680 ms  Scripting
    // 608 ms  Rendering

    event.preventDefault();
    if (event.target.dataset.resize) {
      resizeHandler(this, event.target);
    } // end if resize
  }
}

const resizeHandler = ($root, $target) => {
  const $resizer = $($target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoordinats();
  const direction = $resizer.data.resize;
  const sideProp = direction === 'col' ? 'bottom': 'right';

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px'
  });

  const colIndex = direction === 'col' ? $parent.data.col : null;
  const $cells = direction === 'col'
              ? $root.querySelectorAll(`[data-col="${colIndex}"]`)
              : null;
  let value = '';

  document.onmousemove = e => {
    if (direction === 'col') {
      const delta = e.pageX - coords.right;
      value = `${coords.width + delta}px`;
      $resizer.css({transform: `translateX(${delta}px)`});
    } else {
      const delta = e.pageY - coords.bottom;
      value = `${coords.height + delta}px`;
      $resizer.css({transform: `translateY(${delta}px)`});
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    $resizer.css({
      opacity: 0,
      [sideProp]: 0,
      transform: `translate(0, 0)`
    });
    if (direction === 'col') {
      $cells.forEach(cell => {
        cell.style.cssText = `width: ${value}`;
      });
    } else {
      $parent.css({height: value});
    }
  };
}; // end resizeHandler
