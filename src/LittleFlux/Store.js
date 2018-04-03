import Emitter from './Emitter';

export default class Store extends Emitter {

  constructor() {
    super();
    this.id = null;
    this.state = {};
  }

  getState(prop) {
    return this.state[prop];
  }

  setState(prop, val) {
    let oldState;

    if (typeof (prop) !== 'string') {
      console.log('Store: ошибка! Имя свойства должно быть строкой');
      return false;
    }

    if (this.state[prop]) {
      oldState = this.getState(prop);
    }

    this.state[prop] = val;
    const newState = this.getState(prop);

    return {
      oldState,
      newState,
    };
  }

}
