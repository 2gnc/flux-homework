import Emitter from './LittleFlux/Emitter';
import actions from './myActions';

export default class Sender extends Emitter {

  constructor(store, dispatcher) {
    super();
    this.store = store;
    this.dispatcher = dispatcher;
    this.store.utils.push(this);
  }

  isMounted() {
    actions.logMe(this.dispatcher, 'Инициирован Sender', 0);
    actions.logMe(this.dispatcher, 'Sender зарегистрирован в Store', 0);
  }

  sendToServer(data) {
    return new Promise((res) => {
      setTimeout(() => {
        res(`данные${data || ''} получены, ключ ${Math.random()}`);
      }, Math.random() * 1000);
    });
  }

}
