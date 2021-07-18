import DomListener from '@core/DomListener';

export default class SheetComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.store = options.store;
    this.unsubscribers = [];
    this.unSub = null;

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

  $dispatch(action) {
    this.store.dispatch(action);
  }

  $subscribe(fn) {
    this.unSub = this.store.subscribe(fn);
  }

  $getState() {
    return this.store.getState();
  }

  destruct() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
    this.unSub.unsub();
  }
}
