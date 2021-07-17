import SheetComponent from '@core/SheetComponent';

export default class Formula extends SheetComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options
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

  onClick(event) {
    console.log('Formula: onClick');
  }
}
