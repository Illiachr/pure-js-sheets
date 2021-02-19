import {capitalize} from '@core/utils';

export default class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    console.log(this.listeners);
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`Method ${method} must be implemented at ${this.name}`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    // must be implemented
  }
} // end DomListener

// eventName -> onEventName
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
