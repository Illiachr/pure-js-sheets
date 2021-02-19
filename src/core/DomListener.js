/* eslint-disable require-jsdoc */
export default class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`);
    }
    this.$root = $root;
  }

  initDOMListeners() {

  }

  removeDOMListeners() {

  }
} // end DomListener
