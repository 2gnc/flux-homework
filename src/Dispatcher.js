import Emitter from './MyFlux/Emitter';
import logger from './utils/logger';

// хранит информацию о событии
// отправляет событие и данные в хранилища

export default class Dispatcher extends Emitter {
  
  constructor() {
    super();
    this.stores = [];
  }

  registerStore(store){
    if (this.stores.indexOf(store) === -1) {
      this.stores.push(store);
    }
  }

  dispatch(event) {
    logger(`Dispatcher: вызван метод dispatch для ${event.type}`);
    this.stores.forEach(store => {
      store.fire(event);
    })
  }
}