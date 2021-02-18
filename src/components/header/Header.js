/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Header extends SheetComponent {
  static className = 'excel__header';

  toHTML() {
    return '<h2>Header</h2>';
  }
}
