import SheetComponent from '@core/SheetComponent';
import {resizeHandler} from './tableResize';
import {isCell, isResizable} from './tableHelpers';
import TableSelection from './TableSelection';
import {createTable} from './tableTemplate';
import {$} from '@core/dom';
import {getRange} from '../../core/utils';

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
    const $cell = this.$root.find('[data-id="0:0"]');
    this.tableSelection.select($cell);
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (isCell(event)) {
      const $cell = $(event.target);
      if (event.shiftKey) {
        // group selection
        const target = $(event.target).id(true);
        const current = this.tableSelection.current.id(true);
        const cols = getRange(current.col, target.col);
        console.log(target);
        console.log(current);
        console.log(cols);
      } else {
        // single selection
        this.tableSelection.select($cell);
      }
    }
    if (isResizable(event)) {
      resizeHandler(this.$root, event.target);
    }
  }
}


// 680 ms  Scripting
// 608 ms  Rendering

// 149 ms  Scripting
// 394 ms  Rendering
