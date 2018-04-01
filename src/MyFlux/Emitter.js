export default class Emitter {
  
  constructor() {
    this.events = {};
  }

  on(event, cb) {

    console.log('запуск Emitter - установка слушателя');
    
    //проверяем, чтобы колбэк был функцией
    if(typeof(cb) !== 'function') {
      console.log('колбэк должен быть функцией');
      return false;
    }
    
    //провеяем, чтобы событие было строкой
    if(typeof(event) !== 'string') {
      console.log(`Событие должно быть строкой,  а не ${typeof(event)}`);
      return false;
    }
    
    // создаем событие, если такого еще нет
    if (!this.events[event]) {
      this.events[event] = {
          listeners: []
      }
    }
    // регистрируем слушатель
    this.events[event].listeners.push(cb);
  }

  off(event, listener) {

    console.log('запуск Emitter - удаление слушателя');
    
    // проверяем, что событие есть
    if(!this.events[event]) {
      return false;
    }

    // убираем слушатель
    this.events[event].listeners = this.events[event].listeners.filter((listener) => {
      return listener.toString() !== callback.toString(); 
    });
  }

  fire(event, ...params) {
    // если event не существует
    if(!this.events[event]) {
      console.log(`События ${event} не существует`);
      return false;
    }

    this.events[event].listeners.forEach(itm => {
      console.log(`запускаю ${event}`);
      itm.apply(this, params);
    })
  }
}