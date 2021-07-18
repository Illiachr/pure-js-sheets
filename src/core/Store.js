export default class Store {
  constructor(rootReducer, initialState) {
    this.reducer = rootReducer;
    this.state = rootReducer({...initialState}, {type: '__INIT__'});
    this.listeners = [];
  }

  subscribe(fn) {
    this.listeners.push(fn);
    return {
      unsub() {
        this.listeners = this.listeners.filter(listener => listener !== fn);
      }
    };
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener(this.state));
  }
  getState() {
    return this.state;
  }
}
