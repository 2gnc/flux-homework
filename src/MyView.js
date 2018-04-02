import View from './LittleFlux/View';
import Actions from './myActions';
import { logger } from './LittleFlux/utils/logger';

class MyView extends View {
  constructor() {
    super();
    logger('View: создан экземпляр класса View');
  }

  render(parent, template, data) {

  }

  listenUi(domElement, domEvent, cb) {
    domElement.addEventListener(domEvent, cb);
    logger(`View: слушаем UI - ${domElement.nodeName}`);
  }

}

export default MyView;