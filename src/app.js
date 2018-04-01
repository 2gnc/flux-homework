//import Sender from './utils/SendToServer';
import Store from './MyStore';
import Dispatcher from './MyDispatcher';

const appDispatcher = new Dispatcher();
const appStore = new Store();

appDispatcher.register(appStore);


console.log(appStore);