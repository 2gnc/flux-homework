const log = document.querySelector('.log');
const responce = document.querySelector('.view-stub__res-text');

const logger = (msg, type) => {
  
  const el = document.createElement('div');
  const text = document.createTextNode(msg);
  el.appendChild(text);

  if (type === 0) {
    const prev = document.querySelector('.server-response');
    el.classList.add('server-response');
    if (prev) {
      responce.insertBefore(el, prev);
    } else {
      responce.appendChild(el);
    }
  }
  else {
    const prev = document.querySelector('.log-msg');
    el.classList.add('log-msg');
    if (prev) {
      log.insertBefore(el, prev);
    } else {
      log.appendChild(el);
    }
  }
  console.log(`Logger: ${msg}`);
}

export {logger};