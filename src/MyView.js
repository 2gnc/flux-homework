import View from './LittleFlux/View';
import actions from './myActions';
import { logger } from './LittleFlux/utils/logger';

class MyView extends View {
  constructor(dispatcher) {
    super();
    this.dispatcher = dispatcher;
    actions.logMe(this.dispatcher, `${this.name}: создан экземпляр класса`, 1);
  }

  render(parent, template, data) {

  }

  listenUi(domElement, domEvent, cb) {
    domElement.addEventListener(domEvent, cb);
    logger(`View: слушаем UI - ${domElement.nodeName}`);
  }

}

export default MyView;