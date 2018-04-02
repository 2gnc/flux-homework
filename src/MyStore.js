import Store from './LittleFlux/Store';

export default class MyStore extends Store {
  constructor() {
    super();
    this.state = {
      log: [],
    }
  }

  test() {
    console.log('test');
  }


}



// умеет подписываться на события (унаследовано)
// умеет обрабатывать данные
// умеет обрабатывать бизнес - логику
// умеет оповещать о изменениях... вьюшки и диспетчер
// хранит состояние приложения 