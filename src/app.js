import Store from './MyStore';
import Dispatcher from './MyDispatcher';
import actions from './myActions';
import types from './myActionsTypes';
import View from './MyView';

const appDispatcher = new Dispatcher();
const appStore = new Store(appDispatcher);
const appView = new View();  

const button = document.querySelector('.view-stub__apply');
const inpt = document.querySelector('.view-stub__input');

appDispatcher.register(appStore);

// подписались на события
appStore.on(types.DATA_SEND, appStore.sendData);
appStore.on(types.RESPONCE_RECEIVED, appStore.getData);
appStore.on(types.MAKE_LOG, appStore.log);

appView.listenUi(
  button, 
  'click', 
  (e) => {
    actions.sendData(appDispatcher, inpt.value);
    inpt.value = '';
  });

