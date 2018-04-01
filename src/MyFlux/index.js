import Emitter from './Emitter';

class Dispatcher extends Emitter {
// хранит в свойствах события
// оповещает все хранилища о пришедших Action путем вызова колбэк в сторе
// наследует метод для добавления слушателя
// наследует метод для удаления слушателя
// 

  constructor() {
    super();
  };

//   dispatch(payload) {
//     logEvent(`Store: Вызван диспетчер ${payload.type}`);
//     let name;
//     switch (payload.type) {
//         case 'SEND_DATA':
//             name = 'sender';
//             break;
//         case 'RECEIVE_DATA':
//             name = 'receiver';
//             break;
//         default:
//             return false;
//     }
//     if (this.getState(name) !== payload.data) {
//         this.setState(name, payload.data);
//         logEvent(`Dispatch: Отправляю новое состояние подписчикам`);
//         this.listeners.forEach((listener) => {
//             listener.setState(this.state)
//         });
//     } else {
//         logEvent('Store: Данные не были изменены. Ничего не происходит')
//     }
//     return this.getState();
// }



};

class Store extends Emitter {
// содержит функции обработчики событий
// обрабатывает данные
// записывает свое состояние
// подписывается на определенные события
// вызывет событя изменения состояние
// метод fire 

  constructor() {
    super();
    this.state = {};
  };

  setState(prop, val) {
    let oldState;
    let newState;

    if (typeof(prop) !== 'string' ) {
      console.log('Свойство должно быть строкой');
      return false;
    }
    // если такое свойство уже есть, записываем его значение
    if (this.state[prop]) {
      oldState = this.getState(prop);
    }

    this.state[prop] = val;
    newState = this.getState(prop);

    return {
      prop,
      oldState,
      newState,
    }
  };

  getState(prop) {
    return this.state[prop];
  };

};

class View {
// создает Action
// передает ее в Dispatcher
// получает события и данные из store
// отрисовывает данные

  constructor() {};

  render(template, data, parent) {

  }

}

export {Dispatcher, Store, View};
