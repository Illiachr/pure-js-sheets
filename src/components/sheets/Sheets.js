import {$} from '../../core/dom';

/* eslint-disable require-jsdoc */
export default class Sheets {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    $root.classList.add('excel');
    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      console.log($el);
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
