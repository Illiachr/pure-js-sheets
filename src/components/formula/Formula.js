import SheetComponent from '@core/SheetComponent';
import {$} from '../../core/dom';

export default class Formula extends SheetComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options
    });
  }

  init() {
    super.init();
    this.formulaInput = this.$root.find('#formula');
    this.$on('cell:input', $cell => {
      this.formulaInput.text($cell.text());
    });

    this.$on('cell:next', $cell => {
      this.formulaInput.text($cell.text());
    });
  }

  toHTML() {
    return `
      <div class="formula-info">fx</div>
      <div id="formula" class="formula-input"
      contenteditable="true" spellcheck="false">
      </div>
    `;
  }

  onInput(e) {
    this.$emit('formula:input', $(e.target).text());
  }

  onKeydown(e) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(e.key)) {
      e.preventDefault();
      this.$emit('formula:end');
    }
  }

  onClick(e) {
    console.log('Formula: onClick', e);
  }
}
