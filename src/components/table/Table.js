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
