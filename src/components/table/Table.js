import SheetComponent from '@core/SheetComponent';
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
    const {target} = event;
    if (target.dataset.resize) {
      console.log('Start resizing', target.dataset.resize);
    }
  }
}
