import {$} from '@core/dom';

export const resizeHandler = ($root, $target) => {
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
              ? $root.findAll(`[data-col="${colIndex}"]`)
              : null;
  let value = '';

  const mouseMoveHandler = e => {
    if (direction === 'col') {
      const delta = e.pageX - coords.right;
      value = `${coords.width + delta}px`;
      $resizer.css({transform: `translateX(${delta}px)`});
    } else {
      const delta = e.pageY - coords.bottom;
      value = `${coords.height + delta}px`;
      $resizer.css({transform: `translateY(${delta}px)`});
    }
  }; // end moveHandler

  const mouseUpHandler = () => {
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
  }; // end mouseUpHandler

  document.onmousemove = mouseMoveHandler;
  document.onmouseup = mouseUpHandler;
}; // end resizeHandler
