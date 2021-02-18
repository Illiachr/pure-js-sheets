/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Formula extends SheetComponent {
  static className = 'excel__formula';

  toHTML() {
    return `<h2 class="${this.className}">Formula</h2>`;
  }
}
