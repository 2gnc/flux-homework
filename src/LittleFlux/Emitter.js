export default class Emitter {

  constructor() {
    this.events = {};
    setTimeout(() => {
      this.isMounted();
    }, 100);
  }

  on(event, cb) {

    if (typeof (cb) !== 'function') {
      console.log('Ошибка: колбэк должен быть функцией');
      return false;
    }

    if (typeof (event) !== 'string') {
      console.log(`Ошибка: событие должно быть строкой, а не ${typeof (event)}`);
      return false;
    }

    if (!this.events[event]) {
      this.events[event] = {
        listeners: [],
      };
    }
    this.events[event].listeners.push(cb);

  }

  fire(event, ...params) {
    setTimeout(() => {
      if (!this.events[event]) {
        console.log(`События ${event} не существует`);
        return false;
      }

      this.events[event].listeners.forEach((itm) => {
        itm.apply(this, params);
      });
    }, 500);
  }

  isMounted() {}

}
