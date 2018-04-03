import View from './LittleFlux/View';
import actions from './myActions';

class MyView extends View {

  constructor(dispatcher) {
    super();
    this.dispatcher = dispatcher;
  }

  isMounted() {
    actions.logMe(this.dispatcher, 'Инициирован View', 0);
  }

  render(type, msg) {
    const log = document.querySelector('.log');
    const responce = document.querySelector('.view-stub__res-text');

    const el = document.createElement('div');
    const text = document.createTextNode(msg);
    el.appendChild(text);


    if (type === 1) {
      const prev = document.querySelector('.server-response');
      el.classList.add('server-response');
      if (prev) {
        responce.insertBefore(el, prev);
      } else {
        responce.appendChild(el);
      }
    } else {
      const prev = document.querySelector('.log-msg');
      el.classList.add('log-msg');
      if (prev) {
        log.insertBefore(el, prev);
      } else {
        log.appendChild(el);
      }
    }

  }

  listenUi(domElement, domEvent, cb) {
    domElement.addEventListener(domEvent, cb);
  }

}

export default MyView;
