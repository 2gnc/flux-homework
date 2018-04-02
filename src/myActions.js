import actionTypes from './myActionsTypes';
import {logger} from './LittleFlux/utils/logger'

const Actions = {

  /**
   * @name sendData
   * @param {Dispatcher} dispatcher Ссылка на диспатчер
   * @param {String} text Текст, отправленный на сервер
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
 * @param {Dispatcher} dispatcher Ссылка на диспатчер
 * @param {String} response Текст ответа сервера
 */
  getData(dispatcher, response) {
    dispatcher.dispatch({
      type: actionTypes.RESPONCE_RECEIVED,
      response,
    });
  },

/**
 * 
 * @param {Dispatcher} dispatcher Ссылка на диспатчер
 * @param {String} message Текст сообщения
 * @param {Number} type Тип лога. 0 - лог в списке логов системы, 1 - в списке логов сервера.
 */
  logMe(dispatcher, ...params) {
    dispatcher.dispatch({
      type: actionTypes.MAKE_LOG,
      params
    })
  }, 

}

export default Actions;
