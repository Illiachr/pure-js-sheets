/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Toolbar extends SheetComponent {
  static className = 'excel__tollbar';

  toHTML() {
    return '<h2>Toolbar</h2>';
  }
}
