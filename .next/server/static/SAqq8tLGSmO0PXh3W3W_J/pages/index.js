module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Comments; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function Home() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/index'
  });
}
function Item() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/item'
  });
}
function Selected(item) {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/item/selected',
    query: item
  });
}
function Admin() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/kamoo'
  });
}
function Posts() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/kamoo/posts'
  });
}
function Users() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/kamoo/users'
  });
}
function Comments() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/kamoo/comments'
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-black-45f4dbbaf172acdfbcc9abe1b4c9d1e7.png";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("materialize-css");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-white-ec2f0ce6698dd584c40ce78487bd546f.png";

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(15);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(8);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(16);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./css/main.css
var main = __webpack_require__(12);

// CONCATENATED MODULE: ./reduxModules/items.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCH_ITEMS = 'alex/FETCH_ITEMS';
var FETCH_ITEMS_SUCCESS = 'alex/FETCH_ITEMS_SUCCESS';
var FETCH_ITEMS_FAILED = 'alex/FETCH_ITEMS_FAILED';
var fetchItems = function fetchItems() {
  return {
    type: FETCH_ITEMS
  };
};
var initialState = {
  ItemsDb: [],
  error: '',
  loading: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_ITEMS:
      return _objectSpread({}, state, {
        ItemsDb: []
      });

    case FETCH_ITEMS_SUCCESS:
      {
        return _objectSpread({}, state, {
          ItemsDb: action.payload,
          error: ''
        });
      }

    case FETCH_ITEMS_FAILED:
    case DELETE_Items:
      return _objectSpread({}, state);

    default:
      return state;
  }
};

/* harmony default export */ var items = (reducer);
// CONCATENATED MODULE: ./reduxModules/index.js


/* harmony default export */ var reduxModules = (Object(external_redux_["combineReducers"])({
  items: 'itemsReducer'
}));
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(9);

// CONCATENATED MODULE: ./config.js
var API_SERVER = 'http://localhost:3000';
// CONCATENATED MODULE: ./utils/api.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getJSON = function getJSON(url) {
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }

    return json;
  });
};

var postJSON =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(url, jsonBody) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(jsonBody)
            }).then(function (response) {
              return response.json();
            }).then(function (json) {
              if (json.error) {
                throw Error(json.error.message);
              }

              return json;
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function postJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var patchJSON = function patchJSON(url, jsonBody) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }

    return json;
  });
};

var deleteJSON = function deleteJSON(url) {
  var jsonBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }

    return json;
  });
};

var postLogout = function postLogout(url, json) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(json)
  });
};


// CONCATENATED MODULE: ./sagas/itemsSagas.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(itemsSagas_fetchItems),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(watchItemsSagas);



 // worker Saga: will be fired on USER_FETCH_REQUESTED actions

function itemsSagas_fetchItems(action) {
  var json;
  return regenerator_default.a.wrap(function fetchItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["call"])(getJSON, "".concat(API_SERVER, "/api/items/"));

        case 3:
          json = _context.sent;
          _context.next = 6;
          return Object(effects_["put"])({
            type: FETCH_ITEMS_SUCCESS,
            payload: json
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(effects_["put"])({
            type: FETCH_ITEMS_FAILED,
            message: _context.t0.message
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/


function watchItemsSagas() {
  return regenerator_default.a.wrap(function watchItemsSagas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(effects_["takeLatest"])(FETCH_ITEMS, itemsSagas_fetchItems);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/* harmony default export */ var itemsSagas = (watchItemsSagas);
// CONCATENATED MODULE: ./sagas/index.js


var sagas_marked =
/*#__PURE__*/
regenerator_default.a.mark(rootSaga);


function rootSaga() {
  return regenerator_default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('[API] using luss-official-api');
          _context.next = 3;
          return [itemsSagas()];

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked, this);
}
// EXTERNAL MODULE: ./components/Router.js
var Router = __webpack_require__(1);

// EXTERNAL MODULE: ./img/logo-black.png
var logo_black = __webpack_require__(3);
var logo_black_default = /*#__PURE__*/__webpack_require__.n(logo_black);

// EXTERNAL MODULE: ./img/logo-white.png
var logo_white = __webpack_require__(17);
var logo_white_default = /*#__PURE__*/__webpack_require__.n(logo_white);

// CONCATENATED MODULE: ./components/Navbar.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(5);
}

var Navbar_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.button-collapse').sideNav();
      $('.modal').modal();
      $('.dropdown-button').dropdown({
        constrainWidth: false,
        belowOrigin: true,
        alignment: 'left'
      });
    }
  }, {
    key: "anotherPage",
    value: function anotherPage() {
      return external_react_default.a.createElement("nav", {
        className: "transparent grey darken-4"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "nav-wrapper"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "brand-logo",
        onClick: Router["c" /* Home */]
      }, external_react_default.a.createElement("img", {
        src: logo_white_default.a,
        className: "logo-img"
      })), external_react_default.a.createElement("a", {
        href: "#",
        "data-activates": "mobile-nav",
        className: "button-collapse"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "menu")), external_react_default.a.createElement("ul", {
        className: "right hide-on-med-and-down"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "",
        onClick: Router["d" /* Item */]
      }, "NEW ARRIVAL")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "dropdown-button",
        "data-target": "my-dropdown",
        href: "#"
      }, "CATEGORY", ' ', external_react_default.a.createElement("i", {
        className: "material-icons right"
      }, "arrow_drop_down"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "",
        href: ""
      }, "NEWS UPDATE")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "",
        href: ""
      }, "PAYMENT")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "shopping_cart"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "lock_open")))), external_react_default.a.createElement("ul", {
        className: "side-nav",
        id: "mobile-nav"
      }, external_react_default.a.createElement("h4", {
        className: "purple-text text-darken-4 center"
      }, external_react_default.a.createElement("img", {
        src: logo_black_default.a,
        className: "logo-img"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        onClick: Router["c" /* Home */]
      }, "HOME")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        onClick: Router["d" /* Item */]
      }, "NEW ARRIVAL")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "dropdown-button black-text",
        "data-target": "my-dropdown1",
        href: "#"
      }, "CATEGORY", ' ', external_react_default.a.createElement("i", {
        className: "material-icons right black-text"
      }, "arrow_drop_down"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        href: ""
      }, "NEWS UPDATE")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        href: ""
      }, "PAYMENT"))))), external_react_default.a.createElement("ul", {
        id: "my-dropdown",
        className: "dropdown-content"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "black-text"
      }, "T-SHIRTS")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "black-text"
      }, "HATS"))), external_react_default.a.createElement("ul", {
        id: "my-dropdown1",
        className: "dropdown-content"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "T-SHIRTS")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "HATS"))));
    }
  }, {
    key: "homePage",
    value: function homePage() {
      return external_react_default.a.createElement("nav", {
        className: "transparent"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "nav-wrapper"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "brand-logo",
        onClick: Router["c" /* Home */]
      }, external_react_default.a.createElement("img", {
        src: logo_black_default.a,
        className: "logo-img"
      })), external_react_default.a.createElement("a", {
        href: "",
        "data-activates": "mobile-nav",
        className: "button-collapse"
      }, external_react_default.a.createElement("i", {
        className: "material-icons black-text"
      }, "menu")), external_react_default.a.createElement("ul", {
        className: "right hide-on-med-and-down"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        onClick: Router["d" /* Item */]
      }, "NEW ARRIVAL")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "dropdown-button black-text",
        "data-target": "my-dropdown",
        href: "#"
      }, "CATEGORY", ' ', external_react_default.a.createElement("i", {
        className: "material-icons right black-text"
      }, "arrow_drop_down"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        href: ""
      }, "NEWS UPDATE")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        href: ""
      }, "PAYMENT")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "material-icons black-text"
      }, "shopping_cart"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "material-icons black-text"
      }, "lock_open")))), external_react_default.a.createElement("ul", {
        className: "side-nav",
        id: "mobile-nav"
      }, external_react_default.a.createElement("h4", {
        className: "purple-text text-darken-4 center"
      }, external_react_default.a.createElement("img", {
        src: logo_black_default.a,
        className: "logo-img"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        onClick: Router["c" /* Home */]
      }, "HOME")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        onClick: Router["d" /* Item */]
      }, "NEW ARRIVAL")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "dropdown-button black-text",
        "data-target": "my-dropdown1",
        href: "#"
      }, "CATEGORY", ' ', external_react_default.a.createElement("i", {
        className: "material-icons right black-text"
      }, "arrow_drop_down"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        href: ""
      }, "NEWS UPDATE")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "black-text",
        href: ""
      }, "PAYMENT"))))), external_react_default.a.createElement("ul", {
        id: "my-dropdown",
        className: "dropdown-content"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "black-text"
      }, "T-SHIRTS")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "black-text"
      }, "HATS"))), external_react_default.a.createElement("ul", {
        id: "my-dropdown1",
        className: "dropdown-content"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "T-SHIRTS")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "HATS"))));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.page == 'index') {
        return external_react_default.a.createElement("div", null, this.homePage());
      } else {
        return external_react_default.a.createElement("div", null, this.anotherPage());
      }
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var Navbar = (Navbar_Index);
// CONCATENATED MODULE: ./components/Footer.js
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }



var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Footer_inherits(Footer, _React$Component);

  function Footer() {
    Footer_classCallCheck(this, Footer);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", {
        className: "page-footer grey darken-4"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col l5 s12"
      }, external_react_default.a.createElement("h5", {
        className: "white-text"
      }, "About Us"), external_react_default.a.createElement("p", {
        className: "grey-text text-lighten-4"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus, hic id quod enim voluptate")), external_react_default.a.createElement("div", {
        className: "col l4 s7"
      }, external_react_default.a.createElement("h5", {
        className: "white-text"
      }, "CONTRACT US"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-3",
        href: "index.html"
      }, "Contact Phone: 099-216-4445")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-3",
        href: ""
      }, "Mon-SUN: 10 am - 7 pm ICT")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-3",
        href: ""
      }, "INFO@EXAMPLE.COM")))), external_react_default.a.createElement("div", {
        className: "col l3 s5"
      }, external_react_default.a.createElement("h5", {
        className: "white-text"
      }, "FOLLOW US"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-3",
        href: "index.html"
      }, external_react_default.a.createElement("i", {
        className: "fab fa-facebook x"
      }), " FACEBOOK")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-3",
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "fab fa-instagram x"
      }), " INSTAGARM")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-3",
        href: ""
      }, external_react_default.a.createElement("i", {
        className: "fab fa-youtube x"
      }), " YOUTURE")))))), external_react_default.a.createElement("div", {
        className: "footer-copyright black"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, "LUSS Official \xA9 2018", external_react_default.a.createElement("a", {
        className: "grey-text text-lighten-4 right",
        href: "#!"
      }, "Terms & Conditions"))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_Layout; });
function Layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout_typeof = function _typeof(obj) { return typeof obj; }; } else { Layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout_typeof(obj); }

function Layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout_defineProperties(Constructor, staticProps); return Constructor; }

function Layout_possibleConstructorReturn(self, call) { if (call && (Layout_typeof(call) === "object" || typeof call === "function")) { return call; } return Layout_assertThisInitialized(self); }

function Layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout_getPrototypeOf(o) { Layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Layout_getPrototypeOf(o); }

function Layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Layout_setPrototypeOf(subClass, superClass); }

function Layout_setPrototypeOf(o, p) { Layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Layout_setPrototypeOf(o, p); }











 // create the saga middleware

var sagaMiddleware = external_redux_saga_default()(); // mount it on the Store

var store = Object(external_redux_["createStore"])(reduxModules, Object(external_redux_["applyMiddleware"])(sagaMiddleware));

var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout_inherits(Layout, _Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "render",
    value: function render() {
      sagaMiddleware.run(rootSaga);
      return external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, this.props.title), external_react_default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: logo_black_default.a
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }), external_react_default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",
        rel: "stylesheet"
      }), external_react_default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-2.1.1.min.js"
      }), external_react_default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"
      }), external_react_default.a.createElement("script", {
        src: "path/to/your/bundle.js"
      })), external_react_default.a.createElement("header", {
        className: this.props.page == 'index' ? 'main-header' : this.props.page == 'resume' ? 'resume-header' : ''
      }, external_react_default.a.createElement(Navbar, {
        page: this.props.page
      })), this.props.children, external_react_default.a.createElement(components_Footer, null)));
    }
  }]);

  return Layout;
}(external_react_["Component"]);



/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog1-92c8ed18ea4968966f92f4560ad2730d.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog2-87761ee7fee67bbd769b8b12de675cad.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog3-a7becd38bb7f56ae18918ef29a6e142c.jpg";

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 8 modules
var Layout = __webpack_require__(18);

// EXTERNAL MODULE: ./img/blog1.jpg
var blog1 = __webpack_require__(20);
var blog1_default = /*#__PURE__*/__webpack_require__.n(blog1);

// EXTERNAL MODULE: ./img/blog2.jpg
var blog2 = __webpack_require__(21);
var blog2_default = /*#__PURE__*/__webpack_require__.n(blog2);

// EXTERNAL MODULE: ./img/blog3.jpg
var blog3 = __webpack_require__(22);
var blog3_default = /*#__PURE__*/__webpack_require__.n(blog3);

// CONCATENATED MODULE: ./components/index/Blog.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Blog_Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blog).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        id: "popular",
        className: "section section-popular scrollspy"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("h4", {
        className: "center"
      }, "BLOGS"), external_react_default.a.createElement("div", {
        className: "col s12 m4"
      }, external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-image"
      }, external_react_default.a.createElement("img", {
        src: blog1_default.a,
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto delectus?")))), external_react_default.a.createElement("div", {
        className: "col s12 m4"
      }, external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-image"
      }, external_react_default.a.createElement("img", {
        src: blog2_default.a,
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicingelit.Voluptas aliquid fugiat corporis laudantium, architectodelectus?")))), external_react_default.a.createElement("div", {
        className: "col s12 m4"
      }, external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-image"
      }, external_react_default.a.createElement("img", {
        src: blog3_default.a,
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto delectus?"))))), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12 center"
      }, external_react_default.a.createElement("a", {
        href: "#contact",
        className: "btn btn-large grey darken-4"
      }, external_react_default.a.createElement("i", {
        className: "material-icons left white-text"
      }, "send"), " Contact For Booking")))));
    }
  }]);

  return Blog;
}(external_react_default.a.Component);

/* harmony default export */ var index_Blog = (Blog_Blog);
// CONCATENATED MODULE: ./components/index/Gallery.js
function Gallery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gallery_typeof = function _typeof(obj) { return typeof obj; }; } else { Gallery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gallery_typeof(obj); }

function Gallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gallery_defineProperties(Constructor, staticProps); return Constructor; }

function Gallery_possibleConstructorReturn(self, call) { if (call && (Gallery_typeof(call) === "object" || typeof call === "function")) { return call; } return Gallery_assertThisInitialized(self); }

function Gallery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gallery_getPrototypeOf(o) { Gallery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gallery_getPrototypeOf(o); }

function Gallery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gallery_setPrototypeOf(subClass, superClass); }

function Gallery_setPrototypeOf(o, p) { Gallery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gallery_setPrototypeOf(o, p); }



if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(5);
}

var Gallery_Gallery =
/*#__PURE__*/
function (_React$Component) {
  Gallery_inherits(Gallery, _React$Component);

  function Gallery() {
    Gallery_classCallCheck(this, Gallery);

    return Gallery_possibleConstructorReturn(this, Gallery_getPrototypeOf(Gallery).apply(this, arguments));
  }

  Gallery_createClass(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.materialboxed').materialbox();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        id: "gallery",
        className: "section section-gallery scrollspy"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("h4", {
        className: "center"
      }, "Photo Gallery"), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/45493700_252453522098275_7797968070298828800_n.jpg?_nc_cat=102&_nc_ht=scontent.fbkk12-3.fna&oh=5128190ad921c2f9b12a6758bc2001c4&oe=5CA78136",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/45498065_252452755431685_446875816547057664_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk8-3.fna&oh=b7c0bdbd67b9bc6c453ae387fb5e7b0e&oe=5C6CC1CA",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/45487228_252453372098290_5751974374949257216_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk8-2.fna&oh=3cec8023499b0f111ee6e26ccae10aa0&oe=5C6E18D8",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/45463592_252452958764998_8650713490249482240_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=9fddb47f1818d17dbc6ee9a0d80c34c5&oe=5CAEA4BC",
        alt: ""
      }))), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/41436964_236338633709764_8892984928900218880_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=3c7f585a2173ed93ed39d0c7be0a063b&oe=5C785C6D",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/41405994_236338610376433_4326382885826199552_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk8-2.fna&oh=289c99a92c8dbd8763d751b5b55788b7&oe=5C6C3552",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/41458890_236338103709817_3902124723542163456_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk12-2.fna&oh=ab2c52fd4f2b37a3e654ae198137eaa4&oe=5C750A31",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/41436996_236337340376560_6126593555788988416_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk8-2.fna&oh=3c594566a95aa6efcdec4af7fed813ce&oe=5C73859C",
        alt: ""
      }))), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/41384289_236336443709983_536171592539963392_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk13-1.fna&oh=2c34b457095d19087617a7b1ed26adde&oe=5CB07755",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/41475915_236333403710287_8070724353592918016_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=98e2c53002abf1788a5ee019d466b8ec&oe=5C7178B6",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/41382428_236335307043430_1636302661974228992_n.jpg?_nc_cat=104&_nc_ht=scontent.fbkk12-2.fna&oh=1296ce8167841c5aec64aaf6afbf2701&oe=5C6B81EF",
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("img", {
        className: "materialboxed responsive-img",
        src: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/41412321_236333577043603_1862435000801034240_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk13-1.fna&oh=2ea31bddd201bc59777675ed70824d38&oe=5C78B1B0",
        alt: ""
      })))));
    }
  }]);

  return Gallery;
}(external_react_default.a.Component);

/* harmony default export */ var index_Gallery = (Gallery_Gallery);
// CONCATENATED MODULE: ./pages/index.js





var pages_Index = function Index(props) {
  return external_react_default.a.createElement(Layout["a" /* default */], {
    title: "LUSS Official",
    page: "index"
  }, external_react_default.a.createElement(index_Blog, null), external_react_default.a.createElement(index_Gallery, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);