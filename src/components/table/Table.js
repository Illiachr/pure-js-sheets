import SheetComponent from '@core/SheetComponent';
import {createTable} from './tableTemplate';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  toHTML() {
    return createTable();
  }
}
