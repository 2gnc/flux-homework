import Store from './MyStore';
import Dispatcher from './MyDispatcher';
import actions from './myActions';
import types from './myActionsTypes';
import View from './MyView';

const appDispatcher = new Dispatcher();
const appStore = new Store();
const appView = new View();  

const log = document.querySelector('.log');
const responce = document.querySelector('.view-stub__label');
const button = document.querySelector('.view-stub__apply');
const inpt = document.querySelector('.view-stub__input');

appDispatcher.register(appStore);

// подписались на события
appStore.on(types.DATA_SEND, appStore.test);
appStore.on(types.RESPONCE_RECEIVED, appStore.test);

appView.listenUi(button, 'click', actions.sendData.bind(
  appView,
  [appDispatcher, 
  inpt.value]
));

//console.log(this);