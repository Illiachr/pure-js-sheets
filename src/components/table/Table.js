import SheetComponent from '@core/SheetComponent';
import {resizeHandler} from './tableResize';
import {isCell, isResizable} from './tableHelpers';
import TableSelection from './TableSelection';
import {createTable} from './tableTemplate';
import {$} from '@core/dom';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: Table,
      listeners: ['mousedown'],
    });
  }

  prepare() {
    this.tableSelection = new TableSelection();
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="1:0"]');
    this.tableSelection.select($cell);
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (isCell(event)) {
      const $cell = $(event.target);
      this.tableSelection.select($cell);
      // console.log(event);
      if (event.shiftKey) {
        console.log('shiftKey');
        document.onmouseover = e => {
          this.tableSelection.selectGroup($(e.target));
        };
      }
      document.onmouseup = () => {
        document.onmouseover = null;
        document.onmouseup = null;
      };
    }
    if (isResizable(event)) {
      resizeHandler(this.$root, event.target);
    } // end if resize
  }
}


// 680 ms  Scripting
// 608 ms  Rendering

// 149 ms  Scripting
// 394 ms  Rendering
