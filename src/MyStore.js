import Store from './LittleFlux/Store';
import {logger} from './LittleFlux/utils/logger';
import sender from './LittleFlux/utils/SendToServer';
import actions from './myActions';


export default class MyStore extends Store {
  constructor(dispatcher) {
    super();
    this.state = {
      log: [],
      serverResp: '',
    };
    this.dispatcher = dispatcher;
  }

  on(event, cb) {
    super.on(event, cb);
    actions.logMe(this.dispatcher, 'рраз', 0 ); 
  }

  // test() {
  //   console.log('tets');
  //   actions.log(this.dispatcher, 'Установлена подписка', 0);
  // }

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

  log(message, type) {
    console.log('***', message, type);
  }
} 