import SheetComponent from '@core/SheetComponent';

export default class Formula extends SheetComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
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
    console.log(this.$root);
    console.log('Formula: onInput', target.textContent);
  }

  onClick(event) {
    console.log('Formula: onClick');
  }
}
