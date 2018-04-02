import {logger} from './utils/logger';

export default class Emitter {
  
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    
    //проверяем, чтобы колбэк был функцией
    if(typeof(cb) !== 'function') {
      console.log('Ошибка: колбэк должен быть функцией');
      return false;
    }
    
    //провеяем, чтобы событие было строкой
    if(typeof(event) !== 'string') {
      console.log(`Ошибка: событие должно быть строкой, а не ${typeof(event)}`);
      return false;
    }
    
    // создаем событие, если такого еще нет
    if (!this.events[event]) {
      this.events[event] = {
          listeners: []
      };
    }
    // регистрируем слушатель
    this.events[event].listeners.push(cb);

    //logger(`Подписка на событие ${event}`)
  }

  off(event, listener) {
    
    // проверяем, что событие есть
    if(!this.events[event]) {
      console.log(`Ошибка: нет такого события ${event}`)
      return false;
    }

    // убираем слушатель
    this.events[event].listeners = this.events[event].listeners.filter((listener) => {
      return listener.toString() !== callback.toString(); 
    });

    //logger(`Отписка от события ${event.name}`)
  }

  fire(event, ...params) {
    // если event не существует
    setTimeout(() => {
      if(!this.events[event]) {
        logger(`События ${event} не существует`);
        return false;
      }
  
      this.events[event].listeners.forEach(itm => {
        itm.apply(this, params);
        logger(`Emitter: запускаю колбэк из подписки ${params}`);
      })
    }, 500);
  }
}