export default class Emitter {
  constructor() {
    this.listeners = {};
  }
  // dispatch, fire, trigger
  // Уведомляет о слушателях, если они есть
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    return true;
  }
  // Подписывает на уведомления
  // Добавляет нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    // метод возвращает функцию отписки от события
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn);
    };
  }
}

// const emitter = new Emitter();
// emitter.subcribe('myEvent', data => console.log('subscribe: ', data));
// const unsub = emitter
//     .subcribe('myEvent2', data => console.log('subscribe2: ', data));
// emitter.emit('myEvent', 'myEvent');
// emitter.emit('myEvent2', 'myEvent2');
// setTimeout(() => {
//   emitter.emit('myEvent', 'myEvent after 4sec');
// }, 4000);
// setTimeout(() => {
//   emitter.emit('myEvent2', 'myEvent2 after 6sec');
//   unsub();
// }, 6000);
// setTimeout(() => {
//   emitter.emit('myEvent2', 'myEvent2 after 8sec');
// }, 8000);
