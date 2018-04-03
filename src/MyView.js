import View from './LittleFlux/View';
import actions from './myActions';

class MyView extends View {

  constructor(dispatcher) {
    super();
    this.dispatcher = dispatcher;
  }

  isMounted() {
    actions.logMe(this.dispatcher, 'Инициирован View', 1);
  }

  render(parent, template, data) {

  }

  listenUi(domElement, domEvent, cb) {
    domElement.addEventListener(domEvent, cb);
  }

}

export default MyView;
