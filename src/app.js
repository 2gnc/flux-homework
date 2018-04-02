import Store from './MyStore';
import Dispatcher from './MyDispatcher';
import actions from './myActions';
import types from './myActionsTypes';

const appDispatcher = new Dispatcher();
const appStore = new Store();

appDispatcher.register(appStore);

// подписались на события
appStore.on(types.DATA_SEND, appStore.test);
appStore.on(types.RESPONCE_RECEIVED, appStore.test);



console.log(appStore);