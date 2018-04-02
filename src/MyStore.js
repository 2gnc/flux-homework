import Store from './LittleFlux/Store';
import {logger} from './LittleFlux/utils/logger';
import sender from './LittleFlux/utils/SendToServer';
import actions from './myActions';


export default class MyStore extends Store {
  constructor(dispatcher, views) {
    super();
    this.state = {
      log: [],
      serverResp: '',
    };
    this.dispatcher = dispatcher;
    this.views = views;
    actions.logMe(this.dispatcher, 'Инициирован Store', 1 ); 
  }

  on(event, cb) {
    super.on(event, cb);
    actions.logMe(this.dispatcher, 'Store подписался на событие', 0 ); 
  }

  sendData(data) {
    logger('Store: отправляю данные');
    sender(data)
      .then((result) => {
        this.setState('serverResp', result);
        actions.getData(this.dispatcher, result);
        return result;
      })
      .catch(() => {
        logger('Что-то пошло не так')
      }
    ); 
  }

  getData(data) {
    logger(`Store: ответ получен "${this.getState('serverResp')}"`, 0);
  }

  log(data) {
    // логгер встроен в стор
    // 0 - зовем метод вью А
    // 1 - зовем метод вью Б
    // вью рендерит лог
    // как определить, какую вьюху вызывать и какой метод в ней? 

    console.log('***NEW', data, data[0], data[1]);
  }
} 