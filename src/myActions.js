import actionTypes from './myActionsTypes';
import {logger} from './LittleFlux/utils/logger'

const Actions = {
  sendData(dispatcher, text) {
    dispatcher.dispatch({
      type: actionTypes.DATA_SEND,
      text,
    });
    logger(`Actions: данные отправлены (${text})`);
  },

  getData(dispatcher, response) {
    dispatcher.dispatch({
      type: actionTypes.RESPONCE_RECEIVED,
      response,
    });
  }
}

export default Actions;
