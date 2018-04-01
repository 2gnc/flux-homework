import Emitter from './Emitter'

class MyFlux {
  constructor() {

  };

  ping(who) {
    console.log(who);
  }
}

class Action extends MyFlux {

  constructor() {
  super();
  };



};


class Dispatcher extends Emitter {
// хранит в свойствах события
// наследует метод для добавления слушателя
// наследует метод для удаления слушателя
// 

  constructor() {
    super();
  };

}; // класс MyFlux

class Store extends MyFlux {
  
  constructor() {
    super();
  };

};

class ViewDispatcher extends MyFlux {
  
  constructor() {
    super();
  };

}

class View extends MyFlux {

  constructor() {
    super();
  };

}

export {MyFlux, Action, Dispatcher, Store, ViewDispatcher, View};
