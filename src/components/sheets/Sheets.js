/* eslint-disable require-jsdoc */
export default class Sheets {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
