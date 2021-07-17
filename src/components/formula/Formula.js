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
    this.inputElem = $('.formula-input');
    console.log(this.inputElem);
    this.$on('cell:input', text => {
      this.inputElem.text(text);
    });

    this.$on('cell:new', text => {
      this.inputElem.text(text);
    });
  }

  toHTML() {
    return `
      <div class="formula-info">fx</div>
      <div class="formula-input" contenteditable="true" spellcheck="false">
      </div>
    `;
  }

  onInput(event) {
    const {target} = event;
    const text = target.textContent;
    this.$emit('formula:input', text);
  }

  onKeydown(e) {
    const {key} = e;
    if (key === 'Enter') {
      e.preventDefault();
      this.$emit('formula:end', null);
    }
  }

  onClick(e) {
    console.log('Formula: onClick', e);
  }
}
