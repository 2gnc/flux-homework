import Store from './MyStore';
import Dispatcher from './MyDispatcher';
import actions from './myActions';
import types from './myActionsTypes';
import View from './MyView';
import Sender from './SendToServer';


const appDispatcher = new Dispatcher();
const appView = new View(appDispatcher);
const appStore = new Store(appDispatcher, [appView]);
/* eslint-disable no-unused-vars */
const appSender = new Sender(appStore, appDispatcher);
/* eslint-enable no-unused-vars */

const button = document.querySelector('.view-stub__apply');
const inpt = document.querySelector('.view-stub__input');

appDispatcher.register(appStore);

appStore.on(types.DATA_SEND, appStore.sendData);
appStore.on(types.RESPONCE_RECEIVED, appStore.getData);
appStore.on(types.MAKE_LOG, appStore.log);

appView.listenUi(
  button,
  'click',
/* eslint-disable no-unused-vars */
  (e) => {
/* eslint-enable no-unused-vars */
    actions.sendData(appDispatcher, inpt.value);
    inpt.value = '';
  },
);
