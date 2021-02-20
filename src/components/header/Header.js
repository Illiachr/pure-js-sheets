/* eslint-disable require-jsdoc */
import SheetComponent from '@core/SheetComponent';

export default class Header extends SheetComponent {
  static className = 'excel__header';

  toHTML() {
    return `
        <input type="text" class="input" value="Новая таблица" />
        <div>
          <div class="button">
            <span class="material-icons">exit_to_app</span>
          </div>
          <div class="button">
            <span class="material-icons">delete</span>
          </div>
        </div>
      `;
  }
}
