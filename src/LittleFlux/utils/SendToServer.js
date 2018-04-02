import { logger } from "./logger";


const sendToServer = (data) => {
  return new Promise((res, rej) => {
    logger('SendToServer: отправляю данные на сервер');
    setTimeout(() => {
      res(`данные получены, ключ ${Math.random()}`);
    },Math.random() * 1000);
  });
};

export default sendToServer;