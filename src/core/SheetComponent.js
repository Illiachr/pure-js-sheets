import DomListener from '@core/DomListener';

export default class SheetComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.store = options.store;
    this.unsubscribers = [];

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

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  destruct() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
