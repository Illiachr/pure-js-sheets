/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  toHTML() {
    return '<h2>Table</h2>';
  }
}
