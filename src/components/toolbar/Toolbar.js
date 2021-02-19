/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Toolbar extends SheetComponent {
  static className = 'excel__tollbar';

  toHTML() {
    return `
      <div class="button">
        <span class="material-icons">format_align_left</span>
      </div>
      <div class="button">
        <span class="material-icons">format_align_right</span>
      </div>
      <div class="button">
        <span class="material-icons">format_align_center</span>
      </div>
      <div class="button">
        <span class="material-icons">format_bold</span>
      </div>
      <div class="button">
        <span class="material-icons">format_italic</span>
      </div>
      <div class="button">
        <span class="material-icons">format_underline</span>
      </div>
    `;
  }
}
