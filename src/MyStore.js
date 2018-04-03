import Store from './LittleFlux/Store';
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
    this.utils = [];
  }

  isMounted() {
    actions.logMe(this.dispatcher, 'Инициирован Store', 0);
  }

  on(event, cb) {
    super.on(event, cb);
    actions.logMe(this.dispatcher, 'Store подписался на событие', 0);
  }

  sendData(data) {
    actions.logMe(this.dispatcher, 'Store отправляет данные', 0);
    this.utils[0].sendToServer(data)
      .then((result) => {
        this.setState('serverResp', result);
        actions.getData(this.dispatcher, result);
        return result;
      })
      .catch((err) => {
        console.log()(`Что-то пошло не так ${err}`);
      });
  }

  getData(data) {
    actions.logMe(this.dispatcher, `Store получил ответ: ${this.getState('serverResp')}${data || ''}`, 0);
    return data;
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
