import Dispatcher from './Dispatcher';
import Emitter from './Emitter'
import {logger} from './utils/logger';


// умеет подптсываться на события (унаследовано)
// умеет обрабатывать данные
// умеет обрабатывать бизнес - логику
// умеет оповещать о изменениях... вьюшки и диспетчер
// хранит состояние приложения 

export default class Store extends Emitter {
  
  constructor() {
    super();
    this.id = null;
    this.state = {};
    logger('Store: Создан экземпляр класса Store');
  }

  //getState = prop => this.state[prop];
};
