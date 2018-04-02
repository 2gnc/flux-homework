import Emitter from './Emitter';
import {logger} from './utils/logger';

// хранит информацию о событии
// отправляет событие и данные в хранилища

export default class Dispatcher extends Emitter {
  
  constructor() {
    super();
    this.stores = [];
    this.nextStoreId = 1;
    logger(`Dispatcher: создан экземпляр класса Dispatcher`);
  }

  register(store){
    if (this.stores.indexOf(store) === -1) {
      this.stores.push(store);
      store.id = this.nextStoreId;
      this.idCounter();
      logger(`Dispatcher: зарегистрировано хранилище с ИД ${store.id}`);
    }
  }

  idCounter() {
    this.nextStoreId += 1;
  }

  dispatch(event) {
    logger(`Dispatcher: оповестили хранилища о событии ${event.type}`);
    this.stores.forEach(store => {
      store.fire(event.type);
    })
  }
}