import Dispatcher from './Dispatcher';
import Emitter from './Emitter'
import {logger} from './utils/logger';

export default class Store extends Emitter {
  
  constructor() {
    super();
    this.id = null;
    this.state = {};
    logger('Store: Создан экземпляр класса Store');
  }

  getState(prop) {
    return this.state[prop];
  };

  setState(prop, val) {
    let oldState;
    let newState;

    if(typeof(prop) !== 'string') {
      logger('Store: ошибка! Имя свойства должно быть строкой');
      return false;
    }

    if(this.state[prop]) {
      oldState = this.getState(prop); 
    }

    this.state[prop] = val;
    newState = this.getState(prop);
  }
};
