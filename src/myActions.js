import actionTypes from './myActionsTypes';
import dispatcher from './MyDispatcher';

const Actions = {
  sendData(text) {
    dispatcher.dispatch({
      type: actionTypes.DATA_SEND,
      text,
    });
    logger(`Actions: данные отправлены (${text})`);
  },

  getData(response) {
    dispatcher.dispatch({
      type: actionTypes.RESPONCE_RECEIVED,
      response,
    });
  }
}

export default Actions;
