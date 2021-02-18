/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Toolbar extends SheetComponent {
  static className = 'excel__toolbar';

  toHTML() {
    return '<h2>Toolbar</h2>';
  }
}
