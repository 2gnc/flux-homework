import Dispatcher from './LittleFlux/Dispatcher';
import actions from './myActions';

export default class MyDispatcher extends Dispatcher {

  isMounted() {
    actions.logMe(this, 'Инициирован Dispatcher', 0);
  }

  register(store) {
    super.register(store);
    actions.logMe(this, `Dispatcher зарегистрировал хранилище с id ${store.id}`, 0);
  }

  dispatch(event) {
    super.dispatch(event);
    if (event.type !== 'MAKE_LOG') {
      actions.logMe(this, `Dispatcher оповещает хранилища о событии ${event.type}`, 0);
    }
  }

}
