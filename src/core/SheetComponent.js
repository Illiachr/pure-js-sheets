import DomListener from '@core/DomListener';

export default class SheetComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';

    this.prepare();
  }

  /* Returns component template*/
  toHTML() {
    return '';
  }

  prepare() {

  }

  init() {
    this.initDOMListeners();
  }

  destruct() {
    this.removeDOMListeners();
  }
}
