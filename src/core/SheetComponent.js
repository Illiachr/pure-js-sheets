import DomListener from '@core/DomListener';

export default class SheetComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  /* Returns component template*/
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
