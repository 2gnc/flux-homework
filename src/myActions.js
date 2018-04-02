import actionTypes from './myActionsTypes';
import {logger} from './LittleFlux/utils/logger'

const Actions = {

  /**
   * @name sendData
   * @param {Dispatcher} dispatcher 
   * @param {String} text 
   */
  sendData(dispatcher, text) {
    dispatcher.dispatch({
      type: actionTypes.DATA_SEND,
      text,
    });
    logger(`Actions: данные отправлены (${text})`);
  },

/**
 * @name getData
 * @param {Dispatcher} dispatcher 
 * @param {String} response 
 */
  getData(dispatcher, response) {
    dispatcher.dispatch({
      type: actionTypes.RESPONCE_RECEIVED,
      response,
    });
  },

/**
 * 
 * @param {Dispatcher} dispatcher 
 * @param {String} message 
 * @param {Number} type 
 */
  log(dispatcher, message, type) {
    dispatcher.dispatch({
      type: actionTypes.MAKE_LOG,
      message,
      type
    })
  }, 

}

export default Actions;
