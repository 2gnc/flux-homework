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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dispatcher = function (_Emitter) {
  _inherits(Dispatcher, _Emitter);

  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    var _this = _possibleConstructorReturn(this, (Dispatcher.__proto__ || Object.getPrototypeOf(Dispatcher)).call(this));

    _this.stores = [];
    _this.nextStoreId = 1;
    return _this;
  }

  _createClass(Dispatcher, [{
    key: 'register',
    value: function register(store) {
      if (this.stores.indexOf(store) === -1) {
        this.stores.push(store);
        store.id = this.nextStoreId;
        this.idCounter();
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
      this.stores.forEach(function (store) {
        store.fire(event.type, event.params);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Emitter = function () {
  function Emitter() {
    var _this = this;

    _classCallCheck(this, Emitter);

    this.events = {};
    setTimeout(function () {
      _this.isMounted();
    }, 100);
  }

  _createClass(Emitter, [{
    key: 'on',
    value: function on(event, cb) {

      if (typeof cb !== 'function') {
        console.log('Ошибка: колбэк должен быть функцией');
        return false;
      }

      if (typeof event !== 'string') {
        console.log('\u041E\u0448\u0438\u0431\u043A\u0430: \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u043E\u0439, \u0430 \u043D\u0435 ' + (typeof event === 'undefined' ? 'undefined' : _typeof(event)));
        return false;
      }

      if (!this.events[event]) {
        this.events[event] = {
          listeners: []
        };
      }
      this.events[event].listeners.push(cb);
    }
  }, {
    key: 'fire',
    value: function fire(event) {
      var _this2 = this;

      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      setTimeout(function () {
        if (!_this2.events[event]) {
          console.log('\u0421\u043E\u0431\u044B\u0442\u0438\u044F ' + event + ' \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442');
          return false;
        }

        _this2.events[event].listeners.forEach(function (itm) {
          itm.apply(_this2, params);
        });
      }, 500);
    }
  }, {
    key: 'isMounted',
    value: function isMounted() {}
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

var _Emitter2 = __webpack_require__(/*! ./Emitter */ "./src/LittleFlux/Emitter.js");

var _Emitter3 = _interopRequireDefault(_Emitter2);

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

      if (typeof prop !== 'string') {
        console.log('Store: ошибка! Имя свойства должно быть строкой');
        return false;
      }

      if (this.state[prop]) {
        oldState = this.getState(prop);
      }

      this.state[prop] = val;
      var newState = this.getState(prop);

      return {
        oldState: oldState,
        newState: newState
      };
    }
  }]);

  return Store;
}(_Emitter3.default);

exports.default = Store;

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

var _Emitter2 = __webpack_require__(/*! ./Emitter */ "./src/LittleFlux/Emitter.js");

var _Emitter3 = _interopRequireDefault(_Emitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Emitter) {
  _inherits(View, _Emitter);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {}
  }]);

  return View;
}(_Emitter3.default);

exports.default = View;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Dispatcher2 = __webpack_require__(/*! ./LittleFlux/Dispatcher */ "./src/LittleFlux/Dispatcher.js");

var _Dispatcher3 = _interopRequireDefault(_Dispatcher2);

var _myActions = __webpack_require__(/*! ./myActions */ "./src/myActions.js");

var _myActions2 = _interopRequireDefault(_myActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyDispatcher = function (_Dispatcher) {
  _inherits(MyDispatcher, _Dispatcher);

  function MyDispatcher() {
    _classCallCheck(this, MyDispatcher);

    return _possibleConstructorReturn(this, (MyDispatcher.__proto__ || Object.getPrototypeOf(MyDispatcher)).apply(this, arguments));
  }

  _createClass(MyDispatcher, [{
    key: 'isMounted',
    value: function isMounted() {
      _myActions2.default.logMe(this, 'Инициирован Dispatcher', 0);
    }
  }, {
    key: 'register',
    value: function register(store) {
      _get(MyDispatcher.prototype.__proto__ || Object.getPrototypeOf(MyDispatcher.prototype), 'register', this).call(this, store);
      _myActions2.default.logMe(this, 'Dispatcher \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0441 id ' + store.id, 0);
    }
  }, {
    key: 'dispatch',
    value: function dispatch(event) {
      _get(MyDispatcher.prototype.__proto__ || Object.getPrototypeOf(MyDispatcher.prototype), 'dispatch', this).call(this, event);
      if (event.type !== 'MAKE_LOG') {
        _myActions2.default.logMe(this, 'Dispatcher \u043E\u043F\u043E\u0432\u0435\u0449\u0430\u0435\u0442 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430 \u043E \u0441\u043E\u0431\u044B\u0442\u0438\u0438 ' + event.type, 0);
      }
    }
  }]);

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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Store2 = __webpack_require__(/*! ./LittleFlux/Store */ "./src/LittleFlux/Store.js");

var _Store3 = _interopRequireDefault(_Store2);

var _myActions = __webpack_require__(/*! ./myActions */ "./src/myActions.js");

var _myActions2 = _interopRequireDefault(_myActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyStore = function (_Store) {
  _inherits(MyStore, _Store);

  function MyStore(dispatcher, views) {
    _classCallCheck(this, MyStore);

    var _this = _possibleConstructorReturn(this, (MyStore.__proto__ || Object.getPrototypeOf(MyStore)).call(this));

    _this.state = {
      log: [],
      serverResp: ''
    };
    _this.dispatcher = dispatcher;
    _this.views = views;
    _this.utils = [];
    return _this;
  }

  _createClass(MyStore, [{
    key: 'isMounted',
    value: function isMounted() {
      _myActions2.default.logMe(this.dispatcher, 'Инициирован Store', 0);
    }
  }, {
    key: 'on',
    value: function on(event, cb) {
      _get(MyStore.prototype.__proto__ || Object.getPrototypeOf(MyStore.prototype), 'on', this).call(this, event, cb);
      _myActions2.default.logMe(this.dispatcher, 'Store подписался на событие', 0);
    }
  }, {
    key: 'sendData',
    value: function sendData(data) {
      var _this2 = this;

      _myActions2.default.logMe(this.dispatcher, 'Store отправляет данные', 0);
      this.utils[0].sendToServer(data).then(function (result) {
        _this2.setState('serverResp', result);
        _myActions2.default.getData(_this2.dispatcher, result);
        return result;
      }).catch(function (err) {
        console.log()('\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A ' + err);
      });
    }
  }, {
    key: 'getData',
    value: function getData(data) {
      _myActions2.default.logMe(this.dispatcher, 'Store \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u043E\u0442\u0432\u0435\u0442: ' + this.getState('serverResp') + (data || ''), 1);
      return data;
    }
  }, {
    key: 'log',
    value: function log(data) {
      this.views[0].render(data[1], data[0]);
      console.log('***NEW', data[0], data[1]);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyView = function (_View) {
  _inherits(MyView, _View);

  function MyView(dispatcher) {
    _classCallCheck(this, MyView);

    var _this = _possibleConstructorReturn(this, (MyView.__proto__ || Object.getPrototypeOf(MyView)).call(this));

    _this.dispatcher = dispatcher;
    return _this;
  }

  _createClass(MyView, [{
    key: 'isMounted',
    value: function isMounted() {
      _myActions2.default.logMe(this.dispatcher, 'Инициирован View', 0);
    }
  }, {
    key: 'render',
    value: function render(type, msg) {
      var log = document.querySelector('.log');
      var responce = document.querySelector('.view-stub__res-text');

      var el = document.createElement('div');
      var text = document.createTextNode(msg);
      el.appendChild(text);

      if (type === 1) {
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
    }
  }, {
    key: 'listenUi',
    value: function listenUi(domElement, domEvent, cb) {
      domElement.addEventListener(domEvent, cb);
    }
  }]);

  return MyView;
}(_View3.default);

exports.default = MyView;

/***/ }),

/***/ "./src/SendToServer.js":
/*!*****************************!*\
  !*** ./src/SendToServer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Emitter2 = __webpack_require__(/*! ./LittleFlux/Emitter */ "./src/LittleFlux/Emitter.js");

var _Emitter3 = _interopRequireDefault(_Emitter2);

var _myActions = __webpack_require__(/*! ./myActions */ "./src/myActions.js");

var _myActions2 = _interopRequireDefault(_myActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sender = function (_Emitter) {
  _inherits(Sender, _Emitter);

  function Sender(store, dispatcher) {
    _classCallCheck(this, Sender);

    var _this = _possibleConstructorReturn(this, (Sender.__proto__ || Object.getPrototypeOf(Sender)).call(this));

    _this.store = store;
    _this.dispatcher = dispatcher;
    _this.store.utils.push(_this);
    return _this;
  }

  _createClass(Sender, [{
    key: 'isMounted',
    value: function isMounted() {
      _myActions2.default.logMe(this.dispatcher, 'Инициирован Sender', 0);
      _myActions2.default.logMe(this.dispatcher, 'Sender зарегистрирован в Store', 0);
    }
  }, {
    key: 'sendToServer',
    value: function sendToServer(data) {
      return new Promise(function (res) {
        setTimeout(function () {
          res('\u0434\u0430\u043D\u043D\u044B\u0435' + (data || '') + ' \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B, \u043A\u043B\u044E\u0447 ' + Math.random());
        }, Math.random() * 1000);
      });
    }
  }]);

  return Sender;
}(_Emitter3.default);

exports.default = Sender;

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

var _SendToServer = __webpack_require__(/*! ./SendToServer */ "./src/SendToServer.js");

var _SendToServer2 = _interopRequireDefault(_SendToServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appDispatcher = new _MyDispatcher2.default();
var appView = new _MyView2.default(appDispatcher);
var appStore = new _MyStore2.default(appDispatcher, [appView]);
/* eslint-disable no-unused-vars */
var appSender = new _SendToServer2.default(appStore, appDispatcher);
/* eslint-enable no-unused-vars */

var button = document.querySelector('.view-stub__apply');
var inpt = document.querySelector('.view-stub__input');

appDispatcher.register(appStore);

appStore.on(_myActionsTypes2.default.DATA_SEND, appStore.sendData);
appStore.on(_myActionsTypes2.default.RESPONCE_RECEIVED, appStore.getData);
appStore.on(_myActionsTypes2.default.MAKE_LOG, appStore.log);

appView.listenUi(button, 'click',
/* eslint-disable no-unused-vars */
function (e) {
  /* eslint-enable no-unused-vars */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = {

  /**
   * @name sendData
   * @param {Dispatcher} dispatcher Ссылка на диспатчер
   * @param {String} text Текст, отправленный на сервер
   */
  sendData: function sendData(dispatcher, text) {
    dispatcher.dispatch({
      type: _myActionsTypes2.default.DATA_SEND,
      text: text
    });
  },


  /**
  * @name getData
  * @param {Dispatcher} dispatcher Ссылка на диспатчер
  * @param {String} response Текст ответа сервера
  */
  getData: function getData(dispatcher, response) {
    dispatcher.dispatch({
      type: _myActionsTypes2.default.RESPONCE_RECEIVED,
      response: response
    });
  },


  /**
  *
  * @param {Dispatcher} dispatcher Ссылка на диспатчер
  * @param {String} message Текст сообщения
  * @param {Number} type Тип лога. 0 - лог в списке логов системы, 1 - в списке логов сервера.
  */
  logMe: function logMe(dispatcher) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    dispatcher.dispatch({
      type: _myActionsTypes2.default.MAKE_LOG,
      params: params
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
  RESPONCE_RECEIVED: 'RESPONCE_RECEIVED',
  MAKE_LOG: 'MAKE_LOG'
};

exports.default = ActionTypes;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpdHRsZUZsdXgvRGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGl0dGxlRmx1eC9FbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXR0bGVGbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXR0bGVGbHV4L1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL015RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9TZW5kVG9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXlBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9teUFjdGlvbnNUeXBlcy5qcyJdLCJuYW1lcyI6WyJEaXNwYXRjaGVyIiwic3RvcmVzIiwibmV4dFN0b3JlSWQiLCJzdG9yZSIsImluZGV4T2YiLCJwdXNoIiwiaWQiLCJpZENvdW50ZXIiLCJldmVudCIsImZvckVhY2giLCJmaXJlIiwidHlwZSIsInBhcmFtcyIsIkVtaXR0ZXIiLCJldmVudHMiLCJzZXRUaW1lb3V0IiwiaXNNb3VudGVkIiwiY2IiLCJjb25zb2xlIiwibG9nIiwibGlzdGVuZXJzIiwiaXRtIiwiYXBwbHkiLCJTdG9yZSIsInN0YXRlIiwicHJvcCIsInZhbCIsIm9sZFN0YXRlIiwiZ2V0U3RhdGUiLCJuZXdTdGF0ZSIsIlZpZXciLCJNeURpc3BhdGNoZXIiLCJsb2dNZSIsIk15U3RvcmUiLCJkaXNwYXRjaGVyIiwidmlld3MiLCJzZXJ2ZXJSZXNwIiwidXRpbHMiLCJkYXRhIiwic2VuZFRvU2VydmVyIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwiZ2V0RGF0YSIsImNhdGNoIiwiZXJyIiwicmVuZGVyIiwiTXlWaWV3IiwibXNnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVzcG9uY2UiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsInByZXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbnNlcnRCZWZvcmUiLCJkb21FbGVtZW50IiwiZG9tRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiU2VuZGVyIiwiUHJvbWlzZSIsInJlcyIsIk1hdGgiLCJyYW5kb20iLCJhcHBEaXNwYXRjaGVyIiwiYXBwVmlldyIsImFwcFN0b3JlIiwiYXBwU2VuZGVyIiwiYnV0dG9uIiwiaW5wdCIsInJlZ2lzdGVyIiwib24iLCJEQVRBX1NFTkQiLCJzZW5kRGF0YSIsIlJFU1BPTkNFX1JFQ0VJVkVEIiwiTUFLRV9MT0ciLCJsaXN0ZW5VaSIsImUiLCJ2YWx1ZSIsIkFjdGlvbnMiLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwiQWN0aW9uVHlwZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7O0FBRW5CLHdCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLQyxXQUFM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O0FBSFEsQ0FBcEI7O2tCQU1lTyxXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0b3JlcyA9IFtdO1xuICAgIHRoaXMubmV4dFN0b3JlSWQgPSAxO1xuICB9XG5cbiAgcmVnaXN0ZXIoc3RvcmUpIHtcbiAgICBpZiAodGhpcy5zdG9yZXMuaW5kZXhPZihzdG9yZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLnN0b3Jlcy5wdXNoKHN0b3JlKTtcbiAgICAgIHN0b3JlLmlkID0gdGhpcy5uZXh0U3RvcmVJZDtcbiAgICAgIHRoaXMuaWRDb3VudGVyKCk7XG4gICAgfVxuICB9XG5cbiAgaWRDb3VudGVyKCkge1xuICAgIHRoaXMubmV4dFN0b3JlSWQgKz0gMTtcbiAgfVxuXG4gIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgdGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmUpID0+IHtcbiAgICAgIHN0b3JlLmZpcmUoZXZlbnQudHlwZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc01vdW50ZWQoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgb24oZXZlbnQsIGNiKSB7XG5cbiAgICBpZiAodHlwZW9mIChjYikgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LA6INC60L7Qu9Cx0Y3QuiDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0YTRg9C90LrRhtC40LXQuScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgKGV2ZW50KSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LA6INGB0L7QsdGL0YLQuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDRgdGC0YDQvtC60L7QuSwg0LAg0L3QtSAke3R5cGVvZiAoZXZlbnQpfWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB7XG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmV2ZW50c1tldmVudF0ubGlzdGVuZXJzLnB1c2goY2IpO1xuXG4gIH1cblxuICBmaXJlKGV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDQodC+0LHRi9GC0LjRjyAke2V2ZW50fSDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCYCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmxpc3RlbmVycy5mb3JFYWNoKChpdG0pID0+IHtcbiAgICAgICAgaXRtLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge31cblxufVxuIiwiaW1wb3J0IEVtaXR0ZXIgZnJvbSAnLi9FbWl0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGdldFN0YXRlKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wXTtcbiAgfVxuXG4gIHNldFN0YXRlKHByb3AsIHZhbCkge1xuICAgIGxldCBvbGRTdGF0ZTtcblxuICAgIGlmICh0eXBlb2YgKHByb3ApICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5sb2coJ1N0b3JlOiDQvtGI0LjQsdC60LAhINCY0LzRjyDRgdCy0L7QudGB0YLQstCwINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgdGC0YDQvtC60L7QuScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlW3Byb3BdKSB7XG4gICAgICBvbGRTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUocHJvcCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUocHJvcCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb2xkU3RhdGUsXG4gICAgICBuZXdTdGF0ZSxcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCBFbWl0dGVyIGZyb20gJy4vRW1pdHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICByZW5kZXIoKSB7fVxuXG59XG4iLCJpbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuL0xpdHRsZUZsdXgvRGlzcGF0Y2hlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL215QWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RGlzcGF0Y2hlciBleHRlbmRzIERpc3BhdGNoZXIge1xuXG4gIGlzTW91bnRlZCgpIHtcbiAgICBhY3Rpb25zLmxvZ01lKHRoaXMsICfQmNC90LjRhtC40LjRgNC+0LLQsNC9IERpc3BhdGNoZXInLCAwKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHN0b3JlKSB7XG4gICAgc3VwZXIucmVnaXN0ZXIoc3RvcmUpO1xuICAgIGFjdGlvbnMubG9nTWUodGhpcywgYERpc3BhdGNoZXIg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC7INGF0YDQsNC90LjQu9C40YnQtSDRgSBpZCAke3N0b3JlLmlkfWAsIDApO1xuICB9XG5cbiAgZGlzcGF0Y2goZXZlbnQpIHtcbiAgICBzdXBlci5kaXNwYXRjaChldmVudCk7XG4gICAgaWYgKGV2ZW50LnR5cGUgIT09ICdNQUtFX0xPRycpIHtcbiAgICAgIGFjdGlvbnMubG9nTWUodGhpcywgYERpc3BhdGNoZXIg0L7Qv9C+0LLQtdGJ0LDQtdGCINGF0YDQsNC90LjQu9C40YnQsCDQviDRgdC+0LHRi9GC0LjQuCAke2V2ZW50LnR5cGV9YCwgMCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCBTdG9yZSBmcm9tICcuL0xpdHRsZUZsdXgvU3RvcmUnO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9teUFjdGlvbnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15U3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG5cbiAgY29uc3RydWN0b3IoZGlzcGF0Y2hlciwgdmlld3MpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2c6IFtdLFxuICAgICAgc2VydmVyUmVzcDogJycsXG4gICAgfTtcbiAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgIHRoaXMudmlld3MgPSB2aWV3cztcbiAgICB0aGlzLnV0aWxzID0gW107XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgYWN0aW9ucy5sb2dNZSh0aGlzLmRpc3BhdGNoZXIsICfQmNC90LjRhtC40LjRgNC+0LLQsNC9IFN0b3JlJywgMCk7XG4gIH1cblxuICBvbihldmVudCwgY2IpIHtcbiAgICBzdXBlci5vbihldmVudCwgY2IpO1xuICAgIGFjdGlvbnMubG9nTWUodGhpcy5kaXNwYXRjaGVyLCAnU3RvcmUg0L/QvtC00L/QuNGB0LDQu9GB0Y8g0L3QsCDRgdC+0LHRi9GC0LjQtScsIDApO1xuICB9XG5cbiAgc2VuZERhdGEoZGF0YSkge1xuICAgIGFjdGlvbnMubG9nTWUodGhpcy5kaXNwYXRjaGVyLCAnU3RvcmUg0L7RgtC/0YDQsNCy0LvRj9C10YIg0LTQsNC90L3Ri9C1JywgMCk7XG4gICAgdGhpcy51dGlsc1swXS5zZW5kVG9TZXJ2ZXIoZGF0YSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnc2VydmVyUmVzcCcsIHJlc3VsdCk7XG4gICAgICAgIGFjdGlvbnMuZ2V0RGF0YSh0aGlzLmRpc3BhdGNoZXIsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coKShg0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiAke2Vycn1gKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YShkYXRhKSB7XG4gICAgYWN0aW9ucy5sb2dNZSh0aGlzLmRpc3BhdGNoZXIsIGBTdG9yZSDQv9C+0LvRg9GH0LjQuyDQvtGC0LLQtdGCOiAke3RoaXMuZ2V0U3RhdGUoJ3NlcnZlclJlc3AnKX0ke2RhdGEgfHwgJyd9YCwgMSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBsb2coZGF0YSkge1xuICAgIHRoaXMudmlld3NbMF0ucmVuZGVyKGRhdGFbMV0sIGRhdGFbMF0pO1xuICAgIGNvbnNvbGUubG9nKCcqKipORVcnLCBkYXRhWzBdLCBkYXRhWzFdKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL0xpdHRsZUZsdXgvVmlldyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL215QWN0aW9ucyc7XG5cbmNsYXNzIE15VmlldyBleHRlbmRzIFZpZXcge1xuXG4gIGNvbnN0cnVjdG9yKGRpc3BhdGNoZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgYWN0aW9ucy5sb2dNZSh0aGlzLmRpc3BhdGNoZXIsICfQmNC90LjRhtC40LjRgNC+0LLQsNC9IFZpZXcnLCAwKTtcbiAgfVxuXG4gIHJlbmRlcih0eXBlLCBtc2cpIHtcbiAgICBjb25zdCBsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyk7XG4gICAgY29uc3QgcmVzcG9uY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19yZXMtdGV4dCcpO1xuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobXNnKTtcbiAgICBlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuXG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmVyLXJlc3BvbnNlJyk7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzZXJ2ZXItcmVzcG9uc2UnKTtcbiAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHJlc3BvbmNlLmluc2VydEJlZm9yZShlbCwgcHJldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNwb25jZS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nLW1zZycpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbG9nLW1zZycpO1xuICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgbG9nLmluc2VydEJlZm9yZShlbCwgcHJldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgbGlzdGVuVWkoZG9tRWxlbWVudCwgZG9tRXZlbnQsIGNiKSB7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGRvbUV2ZW50LCBjYik7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNeVZpZXc7XG4iLCJpbXBvcnQgRW1pdHRlciBmcm9tICcuL0xpdHRsZUZsdXgvRW1pdHRlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL215QWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbmRlciBleHRlbmRzIEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKHN0b3JlLCBkaXNwYXRjaGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB0aGlzLnN0b3JlLnV0aWxzLnB1c2godGhpcyk7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgYWN0aW9ucy5sb2dNZSh0aGlzLmRpc3BhdGNoZXIsICfQmNC90LjRhtC40LjRgNC+0LLQsNC9IFNlbmRlcicsIDApO1xuICAgIGFjdGlvbnMubG9nTWUodGhpcy5kaXNwYXRjaGVyLCAnU2VuZGVyINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSDQsiBTdG9yZScsIDApO1xuICB9XG5cbiAgc2VuZFRvU2VydmVyKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlcyhg0LTQsNC90L3Ri9C1JHtkYXRhIHx8ICcnfSDQv9C+0LvRg9GH0LXQvdGLLCDQutC70Y7RhyAke01hdGgucmFuZG9tKCl9YCk7XG4gICAgICB9LCBNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgfSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gJy4vTXlTdG9yZSc7XG5pbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuL015RGlzcGF0Y2hlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL215QWN0aW9ucyc7XG5pbXBvcnQgdHlwZXMgZnJvbSAnLi9teUFjdGlvbnNUeXBlcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL015Vmlldyc7XG5pbXBvcnQgU2VuZGVyIGZyb20gJy4vU2VuZFRvU2VydmVyJztcblxuXG5jb25zdCBhcHBEaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcbmNvbnN0IGFwcFZpZXcgPSBuZXcgVmlldyhhcHBEaXNwYXRjaGVyKTtcbmNvbnN0IGFwcFN0b3JlID0gbmV3IFN0b3JlKGFwcERpc3BhdGNoZXIsIFthcHBWaWV3XSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBwU2VuZGVyID0gbmV3IFNlbmRlcihhcHBTdG9yZSwgYXBwRGlzcGF0Y2hlcik7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2FwcGx5Jyk7XG5jb25zdCBpbnB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctc3R1Yl9faW5wdXQnKTtcblxuYXBwRGlzcGF0Y2hlci5yZWdpc3RlcihhcHBTdG9yZSk7XG5cbmFwcFN0b3JlLm9uKHR5cGVzLkRBVEFfU0VORCwgYXBwU3RvcmUuc2VuZERhdGEpO1xuYXBwU3RvcmUub24odHlwZXMuUkVTUE9OQ0VfUkVDRUlWRUQsIGFwcFN0b3JlLmdldERhdGEpO1xuYXBwU3RvcmUub24odHlwZXMuTUFLRV9MT0csIGFwcFN0b3JlLmxvZyk7XG5cbmFwcFZpZXcubGlzdGVuVWkoXG4gIGJ1dHRvbixcbiAgJ2NsaWNrJyxcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgKGUpID0+IHtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgYWN0aW9ucy5zZW5kRGF0YShhcHBEaXNwYXRjaGVyLCBpbnB0LnZhbHVlKTtcbiAgICBpbnB0LnZhbHVlID0gJyc7XG4gIH0sXG4pO1xuIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4vbXlBY3Rpb25zVHlwZXMnO1xuXG5jb25zdCBBY3Rpb25zID0ge1xuXG4gIC8qKlxuICAgKiBAbmFtZSBzZW5kRGF0YVxuICAgKiBAcGFyYW0ge0Rpc3BhdGNoZXJ9IGRpc3BhdGNoZXIg0KHRgdGL0LvQutCwINC90LAg0LTQuNGB0L/QsNGC0YfQtdGAXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0INCi0LXQutGB0YIsINC+0YLQv9GA0LDQstC70LXQvdC90YvQuSDQvdCwINGB0LXRgNCy0LXRgFxuICAgKi9cbiAgc2VuZERhdGEoZGlzcGF0Y2hlciwgdGV4dCkge1xuICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuREFUQV9TRU5ELFxuICAgICAgdGV4dCxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAqIEBuYW1lIGdldERhdGFcbiAqIEBwYXJhbSB7RGlzcGF0Y2hlcn0gZGlzcGF0Y2hlciDQodGB0YvQu9C60LAg0L3QsCDQtNC40YHQv9Cw0YLRh9C10YBcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXNwb25zZSDQotC10LrRgdGCINC+0YLQstC10YLQsCDRgdC10YDQstC10YDQsFxuICovXG4gIGdldERhdGEoZGlzcGF0Y2hlciwgcmVzcG9uc2UpIHtcbiAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlJFU1BPTkNFX1JFQ0VJVkVELFxuICAgICAgcmVzcG9uc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gKlxuICogQHBhcmFtIHtEaXNwYXRjaGVyfSBkaXNwYXRjaGVyINCh0YHRi9C70LrQsCDQvdCwINC00LjRgdC/0LDRgtGH0LXRgFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2Ug0KLQtdC60YHRgiDRgdC+0L7QsdGJ0LXQvdC40Y9cbiAqIEBwYXJhbSB7TnVtYmVyfSB0eXBlINCi0LjQvyDQu9C+0LPQsC4gMCAtINC70L7QsyDQsiDRgdC/0LjRgdC60LUg0LvQvtCz0L7QsiDRgdC40YHRgtC10LzRiywgMSAtINCyINGB0L/QuNGB0LrQtSDQu9C+0LPQvtCyINGB0LXRgNCy0LXRgNCwLlxuICovXG4gIGxvZ01lKGRpc3BhdGNoZXIsIC4uLnBhcmFtcykge1xuICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuTUFLRV9MT0csXG4gICAgICBwYXJhbXMsXG4gICAgfSk7XG4gIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnM7XG4iLCJjb25zdCBBY3Rpb25UeXBlcyA9IHtcbiAgREFUQV9TRU5EOiAnREFUQV9TRU5EJyxcbiAgUkVTUE9OQ0VfUkVDRUlWRUQ6ICdSRVNQT05DRV9SRUNFSVZFRCcsXG4gIE1BS0VfTE9HOiAnTUFLRV9MT0cnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uVHlwZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9