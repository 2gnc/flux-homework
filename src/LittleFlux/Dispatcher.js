import Emitter from './Emitter';

export default class Dispatcher extends Emitter {

  constructor() {
    super();
    this.stores = [];
    this.nextStoreId = 1;
  }

  register(store) {
    if (this.stores.indexOf(store) === -1) {
      this.stores.push(store);
      store.id = this.nextStoreId;
      this.idCounter();
    }
  }

  idCounter() {
    this.nextStoreId += 1;
  }

  dispatch(event) {
    this.stores.forEach((store) => {
      store.fire(event.type, event.params);
    });
  }

}
