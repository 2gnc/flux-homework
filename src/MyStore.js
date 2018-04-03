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
    actions.logMe(this.dispatcher, `Store получил ответ: ${this.getState('serverResp')}${data || ''}`, 1);
    return data;
  }

  log(data) {
    this.views[0].render(data[1], data[0]);
    console.log('***NEW', data[0], data[1]);
  }

}
