/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Formula extends SheetComponent {
  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="formula-info">fx</div>
      <div class="formula-input" contenteditable="true" spellcheck="false">
      </div>
    `;
  }
}
