/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LittleFlux/Dispatcher.js":
/*!**************************************!*\
  !*** ./src/LittleFlux/Dispatcher.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Emitter2 = __webpack_require__(/*! ./Emitter */ "./src/LittleFlux/Emitter.js");

var _Emitter3 = _interopRequireDefault(_Emitter2);

var _logger = __webpack_require__(/*! ./utils/logger */ "./src/LittleFlux/utils/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// хранит информацию о событии
// отправляет событие и данные в хранилища

var Dispatcher = function (_Emitter) {
  _inherits(Dispatcher, _Emitter);

  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    var _this = _possibleConstructorReturn(this, (Dispatcher.__proto__ || Object.getPrototypeOf(Dispatcher)).call(this));

    _this.stores = [];
    _this.nextStoreId = 1;
    (0, _logger.logger)('Dispatcher: \u0441\u043E\u0437\u0434\u0430\u043D \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043A\u043B\u0430\u0441\u0441\u0430 Dispatcher');
    return _this;
  }

  _createClass(Dispatcher, [{
    key: 'register',
    value: function register(store) {
      if (this.stores.indexOf(store) === -1) {
        this.stores.push(store);
        store.id = this.nextStoreId;
        this.idCounter();
        (0, _logger.logger)('Dispatcher: \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0441 \u0418\u0414 ' + store.id);
      }
    }
  }, {
    key: 'idCounter',
    value: function idCounter() {
      this.nextStoreId += 1;
    }
  }, {
    key: 'dispatch',
    value: function dispatch(event) {
      (0, _logger.logger)('Dispatcher: \u043E\u043F\u043E\u0432\u0435\u0441\u0442\u0438\u043B\u0438 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430 \u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0438 ' + event.type);
      this.stores.forEach(function (store) {
        store.fire(event.type);
      });
    }
  }]);

  return Dispatcher;
}(_Emitter3.default);

exports.default = Dispatcher;

/***/ }),

/***/ "./src/LittleFlux/Emitter.js":
/*!***********************************!*\
  !*** ./src/LittleFlux/Emitter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(/*! ./utils/logger */ "./src/LittleFlux/utils/logger.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.events = {};
  }

  _createClass(Emitter, [{
    key: 'on',
    value: function on(event, cb) {

      //проверяем, чтобы колбэк был функцией
      if (typeof cb !== 'function') {
        (0, _logger.logger)('Ошибка: колбэк должен быть функцией');
        return false;
      }

      //провеяем, чтобы событие было строкой
      if (typeof event !== 'string') {
        (0, _logger.logger)('\u041E\u0448\u0438\u0431\u043A\u0430: \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u043E\u0439, \u0430 \u043D\u0435 ' + (typeof event === 'undefined' ? 'undefined' : _typeof(event)));
        return false;
      }

      // создаем событие, если такого еще нет
      if (!this.events[event]) {
        this.events[event] = {
          listeners: []
        };
      }
      // регистрируем слушатель
      this.events[event].listeners.push(cb);

      (0, _logger.logger)('\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ' + event);
    }
  }, {
    key: 'off',
    value: function off(event, listener) {

      // проверяем, что событие есть
      if (!this.events[event]) {
        (0, _logger.logger)('\u041E\u0448\u0438\u0431\u043A\u0430: \u043D\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F ' + event);
        return false;
      }

      // убираем слушатель
      this.events[event].listeners = this.events[event].listeners.filter(function (listener) {
        return listener.toString() !== callback.toString();
      });

      (0, _logger.logger)('\u041E\u0442\u043F\u0438\u0441\u043A\u0430 \u043E\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F ' + event.name);
    }
  }, {
    key: 'fire',
    value: function fire(event) {
      var _this = this;

      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      // если event не существует
      if (!this.events[event]) {
        (0, _logger.logger)('\u0421\u043E\u0431\u044B\u0442\u0438\u044F ' + event + ' \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442');
        return false;
      }

      this.events[event].listeners.forEach(function (itm) {
        itm.apply(_this, params);
        (0, _logger.logger)('Emitter: \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u044E \u043A\u043E\u043B\u0431\u044D\u043A \u0438\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438');
      });
    }
  }]);

  return Emitter;
}();

exports.default = Emitter;

/***/ }),

/***/ "./src/LittleFlux/Store.js":
/*!*********************************!*\
  !*** ./src/LittleFlux/Store.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dispatcher = __webpack_require__(/*! ./Dispatcher */ "./src/LittleFlux/Dispatcher.js");

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Emitter2 = __webpack_require__(/*! ./Emitter */ "./src/LittleFlux/Emitter.js");

var _Emitter3 = _interopRequireDefault(_Emitter2);

var _logger = __webpack_require__(/*! ./utils/logger */ "./src/LittleFlux/utils/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = function (_Emitter) {
  _inherits(Store, _Emitter);

  function Store() {
    _classCallCheck(this, Store);

    var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

    _this.id = null;
    _this.state = {};
    (0, _logger.logger)('Store: Создан экземпляр класса Store');
    return _this;
  }

  _createClass(Store, [{
    key: 'getState',
    value: function getState(prop) {
      return this.state[prop];
    }
  }, {
    key: 'setState',
    value: function setState(prop, val) {
      var oldState = void 0;
      var newState = void 0;

      if (typeof prop !== 'string') {
        (0, _logger.logger)('Store: ошибка! Имя свойства должно быть строкой');
        return false;
      }

      if (this.state[prop]) {
        oldState = this.getState(prop);
      }

      this.state[prop] = val;
      newState = this.getState(prop);
    }
  }]);

  return Store;
}(_Emitter3.default);

exports.default = Store;
;

/***/ }),

/***/ "./src/LittleFlux/View.js":
/*!********************************!*\
  !*** ./src/LittleFlux/View.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "render",
    value: function render(parent, template, data) {}
  }]);

  return View;
}();

exports.default = View;

/***/ }),

/***/ "./src/LittleFlux/utils/SendToServer.js":
/*!**********************************************!*\
  !*** ./src/LittleFlux/utils/SendToServer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(/*! ./logger */ "./src/LittleFlux/utils/logger.js");

var sendToServer = function sendToServer(data) {
  return new Promise(function (res, rej) {
    (0, _logger.logger)('SendToServer: отправляю данные на сервер');
    setTimeout(function () {
      res("\u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B, \u043A\u043B\u044E\u0447 " + Math.random());
    }, Math.random() * 1000);
  });
};

exports.default = sendToServer;

/***/ }),

/***/ "./src/LittleFlux/utils/logger.js":
/*!****************************************!*\
  !*** ./src/LittleFlux/utils/logger.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = document.querySelector('.log');
var responce = document.querySelector('.view-stub__res-text');

var logger = function logger(msg, type) {

  var el = document.createElement('div');
  var text = document.createTextNode(msg);
  el.appendChild(text);

  if (type === 0) {
    var prev = document.querySelector('.server-response');
    el.classList.add('server-response');
    if (prev) {
      responce.insertBefore(el, prev);
    } else {
      responce.appendChild(el);
    }
  } else {
    var _prev = document.querySelector('.log-msg');
    el.classList.add('log-msg');
    if (_prev) {
      log.insertBefore(el, _prev);
    } else {
      log.appendChild(el);
    }
  }
  console.log('Logger: ' + msg);
};

exports.logger = logger;

/***/ }),

/***/ "./src/MyDispatcher.js":
/*!*****************************!*\
  !*** ./src/MyDispatcher.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dispatcher2 = __webpack_require__(/*! ./LittleFlux/Dispatcher */ "./src/LittleFlux/Dispatcher.js");

var _Dispatcher3 = _interopRequireDefault(_Dispatcher2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyDispatcher = function (_Dispatcher) {
  _inherits(MyDispatcher, _Dispatcher);

  function MyDispatcher() {
    _classCallCheck(this, MyDispatcher);

    return _possibleConstructorReturn(this, (MyDispatcher.__proto__ || Object.getPrototypeOf(MyDispatcher)).call(this));
  }

  return MyDispatcher;
}(_Dispatcher3.default);

exports.default = MyDispatcher;

/***/ }),

/***/ "./src/MyStore.js":
/*!************************!*\
  !*** ./src/MyStore.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Store2 = __webpack_require__(/*! ./LittleFlux/Store */ "./src/LittleFlux/Store.js");

var _Store3 = _interopRequireDefault(_Store2);

var _logger = __webpack_require__(/*! ./LittleFlux/utils/logger */ "./src/LittleFlux/utils/logger.js");

var _SendToServer = __webpack_require__(/*! ./LittleFlux/utils/SendToServer */ "./src/LittleFlux/utils/SendToServer.js");

var _SendToServer2 = _interopRequireDefault(_SendToServer);

var _myActions = __webpack_require__(/*! ./myActions */ "./src/myActions.js");

var _myActions2 = _interopRequireDefault(_myActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyStore = function (_Store) {
  _inherits(MyStore, _Store);

  function MyStore(dispatcher) {
    _classCallCheck(this, MyStore);

    var _this = _possibleConstructorReturn(this, (MyStore.__proto__ || Object.getPrototypeOf(MyStore)).call(this));

    _this.state = {
      log: [],
      serverResp: ''
    };
    _this.dispatcher = dispatcher;
    return _this;
  }

  _createClass(MyStore, [{
    key: 'sendData',
    value: function sendData(data) {
      var _this2 = this;

      (0, _logger.logger)('Store: отправляю данные');
      (0, _SendToServer2.default)(data).then(function (result) {
        _this2.setState('serverResp', result);
        _myActions2.default.getData(_this2.dispatcher, result);
        return result;
      }).catch(function () {
        (0, _logger.logger)('Что-то пошло не так');
      });
    }
  }, {
    key: 'getData',
    value: function getData(data) {
      (0, _logger.logger)('Store: \u043E\u0442\u0432\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0435\u043D "' + this.getState('serverResp') + '"', 0);
    }
  }]);

  return MyStore;
}(_Store3.default);

exports.default = MyStore;

/***/ }),

/***/ "./src/MyView.js":
/*!***********************!*\
  !*** ./src/MyView.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View2 = __webpack_require__(/*! ./LittleFlux/View */ "./src/LittleFlux/View.js");

var _View3 = _interopRequireDefault(_View2);

var _myActions = __webpack_require__(/*! ./myActions */ "./src/myActions.js");

var _myActions2 = _interopRequireDefault(_myActions);

var _logger = __webpack_require__(/*! ./LittleFlux/utils/logger */ "./src/LittleFlux/utils/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyView = function (_View) {
  _inherits(MyView, _View);

  function MyView() {
    _classCallCheck(this, MyView);

    var _this = _possibleConstructorReturn(this, (MyView.__proto__ || Object.getPrototypeOf(MyView)).call(this));

    (0, _logger.logger)('View: создан экземпляр класса View');
    return _this;
  }

  _createClass(MyView, [{
    key: 'render',
    value: function render(parent, template, data) {}
  }, {
    key: 'listenUi',
    value: function listenUi(domElement, domEvent, cb) {
      domElement.addEventListener(domEvent, cb);
      (0, _logger.logger)('View: \u0441\u043B\u0443\u0448\u0430\u0435\u043C UI - ' + domElement.nodeName);
    }
  }]);

  return MyView;
}(_View3.default);

exports.default = MyView;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MyStore = __webpack_require__(/*! ./MyStore */ "./src/MyStore.js");

var _MyStore2 = _interopRequireDefault(_MyStore);

var _MyDispatcher = __webpack_require__(/*! ./MyDispatcher */ "./src/MyDispatcher.js");

var _MyDispatcher2 = _interopRequireDefault(_MyDispatcher);

var _myActions = __webpack_require__(/*! ./myActions */ "./src/myActions.js");

var _myActions2 = _interopRequireDefault(_myActions);

var _myActionsTypes = __webpack_require__(/*! ./myActionsTypes */ "./src/myActionsTypes.js");

var _myActionsTypes2 = _interopRequireDefault(_myActionsTypes);

var _MyView = __webpack_require__(/*! ./MyView */ "./src/MyView.js");

var _MyView2 = _interopRequireDefault(_MyView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appDispatcher = new _MyDispatcher2.default();
var appStore = new _MyStore2.default(appDispatcher);
var appView = new _MyView2.default();

var button = document.querySelector('.view-stub__apply');
var inpt = document.querySelector('.view-stub__input');

appDispatcher.register(appStore);

// подписались на события
appStore.on(_myActionsTypes2.default.DATA_SEND, appStore.sendData);
appStore.on(_myActionsTypes2.default.RESPONCE_RECEIVED, appStore.getData);

appView.listenUi(button, 'click', function (e) {
  _myActions2.default.sendData(appDispatcher, inpt.value);
  inpt.value = '';
});

/***/ }),

/***/ "./src/myActions.js":
/*!**************************!*\
  !*** ./src/myActions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _myActionsTypes = __webpack_require__(/*! ./myActionsTypes */ "./src/myActionsTypes.js");

var _myActionsTypes2 = _interopRequireDefault(_myActionsTypes);

var _logger = __webpack_require__(/*! ./LittleFlux/utils/logger */ "./src/LittleFlux/utils/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = {
  sendData: function sendData(dispatcher, text) {
    dispatcher.dispatch({
      type: _myActionsTypes2.default.DATA_SEND,
      text: text
    });
    (0, _logger.logger)('Actions: \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B (' + text + ')');
  },
  getData: function getData(dispatcher, response) {
    dispatcher.dispatch({
      type: _myActionsTypes2.default.RESPONCE_RECEIVED,
      response: response
    });
  }
};

exports.default = Actions;

/***/ }),

/***/ "./src/myActionsTypes.js":
/*!*******************************!*\
  !*** ./src/myActionsTypes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ActionTypes = {
  DATA_SEND: 'DATA_SEND',
  RESPONCE_RECEIVED: 'RESPONCE_RECEIVED'
};

exports.default = ActionTypes;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpdHRsZUZsdXgvRGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGl0dGxlRmx1eC9FbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXR0bGVGbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXR0bGVGbHV4L1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpdHRsZUZsdXgvdXRpbHMvU2VuZFRvU2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXR0bGVGbHV4L3V0aWxzL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlEaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9NeVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9NeVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXlBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9teUFjdGlvbnNUeXBlcy5qcyJdLCJuYW1lcyI6WyJEaXNwYXRjaGVyIiwic3RvcmVzIiwibmV4dFN0b3JlSWQiLCJzdG9yZSIsImluZGV4T2YiLCJwdXNoIiwiaWQiLCJpZENvdW50ZXIiLCJldmVudCIsInR5cGUiLCJmb3JFYWNoIiwiZmlyZSIsIkVtaXR0ZXIiLCJldmVudHMiLCJjYiIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwiZmlsdGVyIiwidG9TdHJpbmciLCJjYWxsYmFjayIsIm5hbWUiLCJwYXJhbXMiLCJpdG0iLCJhcHBseSIsIlN0b3JlIiwic3RhdGUiLCJwcm9wIiwidmFsIiwib2xkU3RhdGUiLCJuZXdTdGF0ZSIsImdldFN0YXRlIiwiVmlldyIsInBhcmVudCIsInRlbXBsYXRlIiwiZGF0YSIsInNlbmRUb1NlcnZlciIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJzZXRUaW1lb3V0IiwiTWF0aCIsInJhbmRvbSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbmNlIiwibG9nZ2VyIiwibXNnIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJwcmV2IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5zZXJ0QmVmb3JlIiwiY29uc29sZSIsIk15RGlzcGF0Y2hlciIsIk15U3RvcmUiLCJkaXNwYXRjaGVyIiwic2VydmVyUmVzcCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImdldERhdGEiLCJjYXRjaCIsIk15VmlldyIsImRvbUVsZW1lbnQiLCJkb21FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJub2RlTmFtZSIsImFwcERpc3BhdGNoZXIiLCJhcHBTdG9yZSIsImFwcFZpZXciLCJidXR0b24iLCJpbnB0IiwicmVnaXN0ZXIiLCJvbiIsIkRBVEFfU0VORCIsInNlbmREYXRhIiwiUkVTUE9OQ0VfUkVDRUlWRUQiLCJsaXN0ZW5VaSIsImUiLCJ2YWx1ZSIsIkFjdGlvbnMiLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwiQWN0aW9uVHlwZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7QUFDQTs7Ozs7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YUFBVCxDQUF1QixtQkFBdkIsQ0FBYjs7QUFFQTRCLGNBQWNLLFFBQWQsQ0FBdUJKLFFBQXZCOztBQUVBO0FBQ0FBLFNBQVNLLEVBQVQsQ0FBWSx5QkFBTUMsU0FBbEIsRUFBNkJOLFNBQVNPLFFBQXRDO0FBQ0FQLFNBQVNLLEVBQVQsQ0FBWSx5QkFBTUcsaUJBQWxCLEVBQXFDUixTQUFTUixPQUE5Qzs7QUFFQVMsUUFBUVEsUUFBUixDQUNFUCxNQURGLEVBRUUsT0FGRixFQUdFLFVBQUNRLENBQUQsRUFBTztBQUNMLHNCQUFRSCxRQUFSLENBQWlCUixhQUFqQixFQUFnQ0ksS0FBS1EsS0FBckM7QUFDQVIsT0FBS1EsS0FBTCxHQUFhLEVBQWI7QUFDRCxDQU5ILEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7O0FBRUEsSUFBTUMsVUFBVTtBQUNkTCxVQURjLG9CQUNMcEIsVUFESyxFQUNPVixJQURQLEVBQ2E7QUFDekJVLGVBQVcwQixRQUFYLENBQW9CO0FBQ2xCN0UsWUFBTSx5QkFBWXNFLFNBREE7QUFFbEI3QjtBQUZrQixLQUFwQjtBQUlBLHlJQUFzQ0EsSUFBdEM7QUFDRCxHQVBhO0FBU2RlLFNBVGMsbUJBU05MLFVBVE0sRUFTTTJCLFFBVE4sRUFTZ0I7QUFDNUIzQixlQUFXMEIsUUFBWCxDQUFvQjtBQUNsQjdFLFlBQU0seUJBQVl3RSxpQkFEQTtBQUVsQk07QUFGa0IsS0FBcEI7QUFJRDtBQWRhLENBQWhCOztrQkFpQmVGLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmLElBQU1HLGNBQWM7QUFDbEJULGFBQVcsV0FETztBQUVsQkUscUJBQW1CO0FBRkQsQ0FBcEI7O2tCQUtlTyxXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcblxuLy8g0YXRgNCw0L3QuNGCINC40L3RhNC+0YDQvNCw0YbQuNGOINC+INGB0L7QsdGL0YLQuNC4XG4vLyDQvtGC0L/RgNCw0LLQu9GP0LXRgiDRgdC+0LHRi9GC0LjQtSDQuCDQtNCw0L3QvdGL0LUg0LIg0YXRgNCw0L3QuNC70LjRidCwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BhdGNoZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdG9yZXMgPSBbXTtcbiAgICB0aGlzLm5leHRTdG9yZUlkID0gMTtcbiAgICBsb2dnZXIoYERpc3BhdGNoZXI6INGB0L7Qt9C00LDQvSDRjdC60LfQtdC80L/Qu9GP0YAg0LrQu9Cw0YHRgdCwIERpc3BhdGNoZXJgKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHN0b3JlKXtcbiAgICBpZiAodGhpcy5zdG9yZXMuaW5kZXhPZihzdG9yZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLnN0b3Jlcy5wdXNoKHN0b3JlKTtcbiAgICAgIHN0b3JlLmlkID0gdGhpcy5uZXh0U3RvcmVJZDtcbiAgICAgIHRoaXMuaWRDb3VudGVyKCk7XG4gICAgICBsb2dnZXIoYERpc3BhdGNoZXI6INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdC+INGF0YDQsNC90LjQu9C40YnQtSDRgSDQmNCUICR7c3RvcmUuaWR9YCk7XG4gICAgfVxuICB9XG5cbiAgaWRDb3VudGVyKCkge1xuICAgIHRoaXMubmV4dFN0b3JlSWQgKz0gMTtcbiAgfVxuXG4gIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgbG9nZ2VyKGBEaXNwYXRjaGVyOiDQvtC/0L7QstC10YHRgtC40LvQuCDRhdGA0LDQvdC40LvQuNGJ0LAg0L4g0YHQvtCx0YvRgtC40LggJHtldmVudC50eXBlfWApO1xuICAgIHRoaXMuc3RvcmVzLmZvckVhY2goc3RvcmUgPT4ge1xuICAgICAgc3RvcmUuZmlyZShldmVudC50eXBlKTtcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICB9XG5cbiAgb24oZXZlbnQsIGNiKSB7XG4gICAgXG4gICAgLy/Qv9GA0L7QstC10YDRj9C10LwsINGH0YLQvtCx0Ysg0LrQvtC70LHRjdC6INCx0YvQuyDRhNGD0L3QutGG0LjQtdC5XG4gICAgaWYodHlwZW9mKGNiKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9nZ2VyKCfQntGI0LjQsdC60LA6INC60L7Qu9Cx0Y3QuiDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0YTRg9C90LrRhtC40LXQuScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvL9C/0YDQvtCy0LXRj9C10LwsINGH0YLQvtCx0Ysg0YHQvtCx0YvRgtC40LUg0LHRi9C70L4g0YHRgtGA0L7QutC+0LlcbiAgICBpZih0eXBlb2YoZXZlbnQpICE9PSAnc3RyaW5nJykge1xuICAgICAgbG9nZ2VyKGDQntGI0LjQsdC60LA6INGB0L7QsdGL0YLQuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDRgdGC0YDQvtC60L7QuSwg0LAg0L3QtSAke3R5cGVvZihldmVudCl9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8vINGB0L7Qt9C00LDQtdC8INGB0L7QsdGL0YLQuNC1LCDQtdGB0LvQuCDRgtCw0LrQvtCz0L4g0LXRidC1INC90LXRglxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB7XG4gICAgICAgICAgbGlzdGVuZXJzOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDRgNC10LPQuNGB0YLRgNC40YDRg9C10Lwg0YHQu9GD0YjQsNGC0LXQu9GMXG4gICAgdGhpcy5ldmVudHNbZXZlbnRdLmxpc3RlbmVycy5wdXNoKGNiKTtcblxuICAgIGxvZ2dlcihg0J/QvtC00L/QuNGB0LrQsCDQvdCwINGB0L7QsdGL0YLQuNC1ICR7ZXZlbnR9YClcbiAgfVxuXG4gIG9mZihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBcbiAgICAvLyDQv9GA0L7QstC10YDRj9C10LwsINGH0YLQviDRgdC+0LHRi9GC0LjQtSDQtdGB0YLRjFxuICAgIGlmKCF0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgIGxvZ2dlcihg0J7RiNC40LHQutCwOiDQvdC10YIg0YLQsNC60L7Qs9C+INGB0L7QsdGL0YLQuNGPICR7ZXZlbnR9YClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDRgdC70YPRiNCw0YLQtdC70YxcbiAgICB0aGlzLmV2ZW50c1tldmVudF0ubGlzdGVuZXJzID0gdGhpcy5ldmVudHNbZXZlbnRdLmxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIudG9TdHJpbmcoKSAhPT0gY2FsbGJhY2sudG9TdHJpbmcoKTsgXG4gICAgfSk7XG5cbiAgICBsb2dnZXIoYNCe0YLQv9C40YHQutCwINC+0YIg0YHQvtCx0YvRgtC40Y8gJHtldmVudC5uYW1lfWApXG4gIH1cblxuICBmaXJlKGV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICAvLyDQtdGB0LvQuCBldmVudCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCXG4gICAgaWYoIXRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgbG9nZ2VyKGDQodC+0LHRi9GC0LjRjyAke2V2ZW50fSDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCYCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnRdLmxpc3RlbmVycy5mb3JFYWNoKGl0bSA9PiB7XG4gICAgICBpdG0uYXBwbHkodGhpcywgcGFyYW1zKTtcbiAgICAgIGxvZ2dlcihgRW1pdHRlcjog0LfQsNC/0YPRgdC60LDRjiDQutC+0LvQsdGN0Log0LjQtyDQv9C+0LTQv9C40YHQutC4YCk7XG4gICAgfSlcbiAgfVxufSIsImltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4vRGlzcGF0Y2hlcic7XG5pbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEVtaXR0ZXIge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgbG9nZ2VyKCdTdG9yZTog0KHQvtC30LTQsNC9INGN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgU3RvcmUnKTtcbiAgfVxuXG4gIGdldFN0YXRlKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wXTtcbiAgfTtcblxuICBzZXRTdGF0ZShwcm9wLCB2YWwpIHtcbiAgICBsZXQgb2xkU3RhdGU7XG4gICAgbGV0IG5ld1N0YXRlO1xuXG4gICAgaWYodHlwZW9mKHByb3ApICE9PSAnc3RyaW5nJykge1xuICAgICAgbG9nZ2VyKCdTdG9yZTog0L7RiNC40LHQutCwISDQmNC80Y8g0YHQstC+0LnRgdGC0LLQsCDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0YHRgtGA0L7QutC+0LknKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnN0YXRlW3Byb3BdKSB7XG4gICAgICBvbGRTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUocHJvcCk7IFxuICAgIH1cblxuICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgbmV3U3RhdGUgPSB0aGlzLmdldFN0YXRlKHByb3ApO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge307XG5cbiAgcmVuZGVyKHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcbiAgICBcbiAgfVxuXG59IiwiaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cblxuY29uc3Qgc2VuZFRvU2VydmVyID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGxvZ2dlcignU2VuZFRvU2VydmVyOiDQvtGC0L/RgNCw0LLQu9GP0Y4g0LTQsNC90L3Ri9C1INC90LAg0YHQtdGA0LLQtdGAJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXMoYNC00LDQvdC90YvQtSDQv9C+0LvRg9GH0LXQvdGLLCDQutC70Y7RhyAke01hdGgucmFuZG9tKCl9YCk7XG4gICAgfSxNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VuZFRvU2VydmVyOyIsImNvbnN0IGxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2cnKTtcbmNvbnN0IHJlc3BvbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctc3R1Yl9fcmVzLXRleHQnKTtcblxuY29uc3QgbG9nZ2VyID0gKG1zZywgdHlwZSkgPT4ge1xuICBcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XG4gIGVsLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGlmICh0eXBlID09PSAwKSB7XG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2ZXItcmVzcG9uc2UnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdzZXJ2ZXItcmVzcG9uc2UnKTtcbiAgICBpZiAocHJldikge1xuICAgICAgcmVzcG9uY2UuaW5zZXJ0QmVmb3JlKGVsLCBwcmV2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uY2UuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy1tc2cnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdsb2ctbXNnJyk7XG4gICAgaWYgKHByZXYpIHtcbiAgICAgIGxvZy5pbnNlcnRCZWZvcmUoZWwsIHByZXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgTG9nZ2VyOiAke21zZ31gKTtcbn1cblxuZXhwb3J0IHtsb2dnZXJ9OyIsImltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4vTGl0dGxlRmx1eC9EaXNwYXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEaXNwYXRjaGVyIGV4dGVuZHMgRGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn0iLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9MaXR0bGVGbHV4L1N0b3JlJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuL0xpdHRsZUZsdXgvdXRpbHMvbG9nZ2VyJztcbmltcG9ydCBzZW5kZXIgZnJvbSAnLi9MaXR0bGVGbHV4L3V0aWxzL1NlbmRUb1NlcnZlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL215QWN0aW9ucyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlTdG9yZSBleHRlbmRzIFN0b3JlIHtcbiAgY29uc3RydWN0b3IoZGlzcGF0Y2hlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZzogW10sXG4gICAgICBzZXJ2ZXJSZXNwOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gIH1cblxuICBzZW5kRGF0YShkYXRhKSB7XG4gICAgbG9nZ2VyKCdTdG9yZTog0L7RgtC/0YDQsNCy0LvRj9GOINC00LDQvdC90YvQtScpO1xuICAgIHNlbmRlcihkYXRhKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCdzZXJ2ZXJSZXNwJywgcmVzdWx0KTtcbiAgICAgICAgYWN0aW9ucy5nZXREYXRhKHRoaXMuZGlzcGF0Y2hlciwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBsb2dnZXIoJ9Cn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LonKVxuICAgICAgfVxuICAgICk7IFxuICB9XG5cbiAgZ2V0RGF0YShkYXRhKSB7XG4gICAgbG9nZ2VyKGBTdG9yZTog0L7RgtCy0LXRgiDQv9C+0LvRg9GH0LXQvSBcIiR7dGhpcy5nZXRTdGF0ZSgnc2VydmVyUmVzcCcpfVwiYCwgMCk7XG4gIH1cbn0gIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9MaXR0bGVGbHV4L1ZpZXcnO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9teUFjdGlvbnMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9MaXR0bGVGbHV4L3V0aWxzL2xvZ2dlcic7XG5cbmNsYXNzIE15VmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGxvZ2dlcignVmlldzog0YHQvtC30LTQsNC9INGN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgVmlldycpO1xuICB9XG5cbiAgcmVuZGVyKHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcblxuICB9XG5cbiAgbGlzdGVuVWkoZG9tRWxlbWVudCwgZG9tRXZlbnQsIGNiKSB7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGRvbUV2ZW50LCBjYik7XG4gICAgbG9nZ2VyKGBWaWV3OiDRgdC70YPRiNCw0LXQvCBVSSAtICR7ZG9tRWxlbWVudC5ub2RlTmFtZX1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15VmlldzsiLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9NeVN0b3JlJztcbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4vTXlEaXNwYXRjaGVyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vbXlBY3Rpb25zJztcbmltcG9ydCB0eXBlcyBmcm9tICcuL215QWN0aW9uc1R5cGVzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vTXlWaWV3JztcblxuY29uc3QgYXBwRGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5jb25zdCBhcHBTdG9yZSA9IG5ldyBTdG9yZShhcHBEaXNwYXRjaGVyKTtcbmNvbnN0IGFwcFZpZXcgPSBuZXcgVmlldygpOyAgXG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2FwcGx5Jyk7XG5jb25zdCBpbnB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctc3R1Yl9faW5wdXQnKTtcblxuYXBwRGlzcGF0Y2hlci5yZWdpc3RlcihhcHBTdG9yZSk7XG5cbi8vINC/0L7QtNC/0LjRgdCw0LvQuNGB0Ywg0L3QsCDRgdC+0LHRi9GC0LjRj1xuYXBwU3RvcmUub24odHlwZXMuREFUQV9TRU5ELCBhcHBTdG9yZS5zZW5kRGF0YSk7XG5hcHBTdG9yZS5vbih0eXBlcy5SRVNQT05DRV9SRUNFSVZFRCwgYXBwU3RvcmUuZ2V0RGF0YSk7XG5cbmFwcFZpZXcubGlzdGVuVWkoXG4gIGJ1dHRvbiwgXG4gICdjbGljaycsIFxuICAoZSkgPT4ge1xuICAgIGFjdGlvbnMuc2VuZERhdGEoYXBwRGlzcGF0Y2hlciwgaW5wdC52YWx1ZSk7XG4gICAgaW5wdC52YWx1ZSA9ICcnO1xuICB9KTtcblxuIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4vbXlBY3Rpb25zVHlwZXMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vTGl0dGxlRmx1eC91dGlscy9sb2dnZXInXG5cbmNvbnN0IEFjdGlvbnMgPSB7XG4gIHNlbmREYXRhKGRpc3BhdGNoZXIsIHRleHQpIHtcbiAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkRBVEFfU0VORCxcbiAgICAgIHRleHQsXG4gICAgfSk7XG4gICAgbG9nZ2VyKGBBY3Rpb25zOiDQtNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90YsgKCR7dGV4dH0pYCk7XG4gIH0sXG5cbiAgZ2V0RGF0YShkaXNwYXRjaGVyLCByZXNwb25zZSkge1xuICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuUkVTUE9OQ0VfUkVDRUlWRUQsXG4gICAgICByZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xuIiwiY29uc3QgQWN0aW9uVHlwZXMgPSB7XG4gIERBVEFfU0VORDogJ0RBVEFfU0VORCcsXG4gIFJFU1BPTkNFX1JFQ0VJVkVEOiAnUkVTUE9OQ0VfUkVDRUlWRUQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uVHlwZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==