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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("materialize-css");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/person1-2ca1bbb42e6f4f0e3941356ec8e8dbb8.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/person2-0257400aaf80dc3a880e902f2b0e3025.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/person3-f849f26ba653f6f98acdf0687bf07567.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ocean-94deb843ea9dff826ddf9a5ef0ff75df.jpg";

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./css/main.css
var main = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Router.js
var Router = __webpack_require__(1);

// EXTERNAL MODULE: ./img/logo-black.png
var logo_black = __webpack_require__(3);
var logo_black_default = /*#__PURE__*/__webpack_require__.n(logo_black);

// EXTERNAL MODULE: ./img/ocean.jpg
var ocean = __webpack_require__(13);
var ocean_default = /*#__PURE__*/__webpack_require__.n(ocean);

// EXTERNAL MODULE: ./img/person1.jpg
var person1 = __webpack_require__(6);
var person1_default = /*#__PURE__*/__webpack_require__.n(person1);

// CONCATENATED MODULE: ./components/admin/Navbar.js
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
      //Init Side nav
      $('.button-collapse').sideNav(); // Init Modal

      $('.modal').modal();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("nav", {
        className: "white"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "nav-wrapper"
      }, external_react_default.a.createElement("a", {
        onClick: Router["c" /* Home */],
        className: "brand-logo black-text"
      }, external_react_default.a.createElement("img", {
        src: logo_black_default.a,
        className: "logo-img cursor-pointer"
      })), external_react_default.a.createElement("a", {
        href: "",
        "data-activates": "side-nav",
        className: "button-collapse show-on-large right black-text"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "menu")), external_react_default.a.createElement("ul", {
        className: "right hide-on-med-and-down"
      }, external_react_default.a.createElement("li", {
        className: this.props.pages == 'index' ? 'active' : '',
        onClick: Router["a" /* Admin */]
      }, external_react_default.a.createElement("a", {
        className: "black-text"
      }, "Dashboard")), external_react_default.a.createElement("li", {
        className: this.props.pages == 'posts' ? 'active' : '',
        onClick: Router["e" /* Posts */]
      }, external_react_default.a.createElement("a", {
        className: "black-text"
      }, "Posts")), external_react_default.a.createElement("li", {
        className: this.props.pages == 'comments' ? 'active' : '',
        onClick: Router["b" /* Comments */]
      }, external_react_default.a.createElement("a", {
        className: "black-text"
      }, "Comments")), external_react_default.a.createElement("li", {
        className: this.props.pages == 'users' ? 'active' : '',
        onClick: Router["g" /* Users */]
      }, external_react_default.a.createElement("a", {
        className: "black-text"
      }, "Users"))), external_react_default.a.createElement("ul", {
        id: "side-nav",
        className: "side-nav"
      }, external_react_default.a.createElement("div", {
        className: "user-view"
      }, external_react_default.a.createElement("div", {
        className: "background"
      }, external_react_default.a.createElement("img", {
        src: ocean_default.a,
        alt: ""
      })), external_react_default.a.createElement("a", {
        style: {
          marginTop: '30px'
        }
      }, external_react_default.a.createElement("img", {
        src: person1_default.a,
        alt: "",
        className: "circle"
      })), external_react_default.a.createElement("a", null, ' ', external_react_default.a.createElement("span", {
        className: "name white-text"
      }, "John Doe"), ' '), external_react_default.a.createElement("a", {
        style: {
          marginBottom: '5px'
        }
      }, external_react_default.a.createElement("span", {
        className: "email white-text"
      }, "jdoe@gmail.com"))), external_react_default.a.createElement("li", {
        onClick: Router["a" /* Admin */]
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "dashboard"), " Dashboard")), external_react_default.a.createElement("li", {
        onClick: Router["e" /* Posts */]
      }, external_react_default.a.createElement("a", null, "Posts")), external_react_default.a.createElement("li", {
        onClick: Router["b" /* Comments */]
      }, external_react_default.a.createElement("a", null, "Comments")), external_react_default.a.createElement("li", {
        onClick: Router["g" /* Users */]
      }, external_react_default.a.createElement("a", null, "Users")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "divider"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "subheader"
      }, "Account Controls")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "waves-effect"
      }, "Logout"))))), external_react_default.a.createElement("div", {
        className: "fixed-action-btn"
      }, external_react_default.a.createElement("a", {
        className: "btn-floating btn-large red"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add")), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#post-modal",
        className: "modal-trigger btn-floating grey darken-4"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "mode_edit"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#category-modal",
        className: "modal-trigger btn-floating  grey darken-4"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "folder"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#user-modal",
        className: "modal-trigger btn-floating  grey darken-4"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "supervisor_account"))))), external_react_default.a.createElement("div", {
        id: "category-modal",
        className: "modal"
      }, external_react_default.a.createElement("div", {
        className: "modal-content black-text"
      }, external_react_default.a.createElement("h4", null, "Add Category"), external_react_default.a.createElement("form", null, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "text",
        id: "title"
      }), ' ', external_react_default.a.createElement("label", {
        htmlFor: "title"
      }, "Title"))), external_react_default.a.createElement("div", {
        className: "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#!",
        className: "modal-action modal-close btn blue white-text"
      }, "Submit")))), external_react_default.a.createElement("div", {
        id: "user-modal",
        className: "modal"
      }, external_react_default.a.createElement("div", {
        className: "modal-content black-text"
      }, external_react_default.a.createElement("h4", null, "Add User"), external_react_default.a.createElement("form", null, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "text",
        id: "name"
      }), ' ', external_react_default.a.createElement("label", {
        htmlFor: "name"
      }, "Name")), external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "email",
        id: "email"
      }), ' ', external_react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email")), external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "password",
        id: "password"
      }), external_react_default.a.createElement("label", {
        htmlFor: "password"
      }, "Password")), external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "password",
        id: "password2"
      }), external_react_default.a.createElement("label", {
        htmlFor: "password2"
      }, "Confirm Password"))), external_react_default.a.createElement("div", {
        className: "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#!",
        className: "modal-action modal-close btn blue white-text"
      }, "Submit")))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var Navbar = (Navbar_Index);
// CONCATENATED MODULE: ./components/admin/Footer.js
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
        className: "section grey darken-4 center"
      }, external_react_default.a.createElement("p", {
        className: "white-text"
      }, "Luss Official Admin \xA9 2018"));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var admin_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/admin/Layout.js
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








if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(5);
}

var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout_inherits(Layout, _Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, this.props.title), external_react_default.a.createElement("link", {
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
      })), external_react_default.a.createElement("body", {
        className: "grey lighten-4"
      }, external_react_default.a.createElement(Navbar, {
        pages: this.props.pages
      }), this.props.children, external_react_default.a.createElement(admin_Footer, null)));
    }
  }]);

  return Layout;
}(external_react_["Component"]);



/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/admin/Layout.js + 2 modules
var Layout = __webpack_require__(14);

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(24);

// EXTERNAL MODULE: ./img/person1.jpg
var person1 = __webpack_require__(6);
var person1_default = /*#__PURE__*/__webpack_require__.n(person1);

// EXTERNAL MODULE: ./img/person2.jpg
var person2 = __webpack_require__(10);
var person2_default = /*#__PURE__*/__webpack_require__.n(person2);

// EXTERNAL MODULE: ./img/person3.jpg
var person3 = __webpack_require__(11);
var person3_default = /*#__PURE__*/__webpack_require__.n(person3);

// CONCATENATED MODULE: ./components/admin/Visitors.js
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

var x = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: '# of Visitors',
    data: [100, 190, 300, 50, 20, 30, 150, 190, 30, 500, 200, 300],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
    borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
    borderWidth: 1
  }]
};

var Visitors_Visitors =
/*#__PURE__*/
function (_Component) {
  _inherits(Visitors, _Component);

  function Visitors() {
    _classCallCheck(this, Visitors);

    return _possibleConstructorReturn(this, _getPrototypeOf(Visitors).apply(this, arguments));
  }

  _createClass(Visitors, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        className: "section section-visitors grey lighten-3"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m12 l8"
      }, external_react_default.a.createElement("div", {
        className: "card-panel"
      }, external_react_default.a.createElement(external_react_chartjs_2_["Bar"], {
        data: x,
        height: "80"
      }))), external_react_default.a.createElement("div", {
        className: "col s12 m12 l4"
      }, external_react_default.a.createElement("ul", {
        className: "collection with-header latest-comments"
      }, external_react_default.a.createElement("li", {
        className: "collection-header"
      }, external_react_default.a.createElement("h5", null, "Latest Comments")), external_react_default.a.createElement("li", {
        className: "collection-item avatar"
      }, external_react_default.a.createElement("img", {
        src: person1_default.a,
        alt: "",
        className: "circle"
      }), external_react_default.a.createElement("span", {
        className: "title"
      }, "John Doe"), external_react_default.a.createElement("p", {
        className: "truncate"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore."), external_react_default.a.createElement("a", {
        href: "",
        className: "approve green-text"
      }, "Approve"), ' ', "|", external_react_default.a.createElement("a", {
        href: "",
        className: "deny red-text"
      }, "Deny")), external_react_default.a.createElement("li", {
        className: "collection-item avatar"
      }, external_react_default.a.createElement("img", {
        src: person2_default.a,
        alt: "",
        className: "circle"
      }), external_react_default.a.createElement("span", {
        className: "title"
      }, "Steve Smith"), external_react_default.a.createElement("p", {
        className: "truncate"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore."), external_react_default.a.createElement("a", {
        href: "",
        className: "approve green-text"
      }, "Approve"), ' ', "|", external_react_default.a.createElement("a", {
        href: "",
        className: "deny red-text"
      }, "Deny")), external_react_default.a.createElement("li", {
        className: "collection-item avatar"
      }, external_react_default.a.createElement("img", {
        src: person3_default.a,
        alt: "",
        className: "circle"
      }), external_react_default.a.createElement("span", {
        className: "title"
      }, "Ellen Williams"), external_react_default.a.createElement("p", {
        className: "truncate"
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore."), external_react_default.a.createElement("a", {
        href: "",
        className: "approve green-text"
      }, "Approve"), ' ', "|", external_react_default.a.createElement("a", {
        href: "",
        className: "deny red-text"
      }, "Deny"))))));
    }
  }]);

  return Visitors;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/admin/RecentPosts.js
function RecentPosts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RecentPosts_typeof = function _typeof(obj) { return typeof obj; }; } else { RecentPosts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RecentPosts_typeof(obj); }

function RecentPosts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RecentPosts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RecentPosts_createClass(Constructor, protoProps, staticProps) { if (protoProps) RecentPosts_defineProperties(Constructor.prototype, protoProps); if (staticProps) RecentPosts_defineProperties(Constructor, staticProps); return Constructor; }

function RecentPosts_possibleConstructorReturn(self, call) { if (call && (RecentPosts_typeof(call) === "object" || typeof call === "function")) { return call; } return RecentPosts_assertThisInitialized(self); }

function RecentPosts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RecentPosts_getPrototypeOf(o) { RecentPosts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RecentPosts_getPrototypeOf(o); }

function RecentPosts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RecentPosts_setPrototypeOf(subClass, superClass); }

function RecentPosts_setPrototypeOf(o, p) { RecentPosts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RecentPosts_setPrototypeOf(o, p); }






if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(5);
}

var RecentPosts_RecentPosts =
/*#__PURE__*/
function (_Component) {
  RecentPosts_inherits(RecentPosts, _Component);

  function RecentPosts() {
    RecentPosts_classCallCheck(this, RecentPosts);

    return RecentPosts_possibleConstructorReturn(this, RecentPosts_getPrototypeOf(RecentPosts).apply(this, arguments));
  }

  RecentPosts_createClass(RecentPosts, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        className: "section section-recent"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l8 m6"
      }, external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("span", {
        className: "card-title"
      }, "Recent Posts"), external_react_default.a.createElement("table", {
        className: "striped"
      }, external_react_default.a.createElement("thead", null, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("th", null, "Photo"), external_react_default.a.createElement("th", null, "Name"), external_react_default.a.createElement("th", null, "Price"), external_react_default.a.createElement("th", null, "Upload by"), external_react_default.a.createElement("th", null))), external_react_default.a.createElement("tbody", null, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        src: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F",
        width: "50px"
      })), external_react_default.a.createElement("td", null, "LUSS \u201CHigh Score\u201D List Tee"), external_react_default.a.createElement("td", null, "\u0E3F890"), external_react_default.a.createElement("td", null, external_react_default.a.createElement("div", {
        className: "chip"
      }, external_react_default.a.createElement("img", {
        src: person1_default.a
      }), " John Doe")), external_react_default.a.createElement("td", null, external_react_default.a.createElement("a", {
        href: "details.html",
        className: "btn green "
      }, "Details"))), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        src: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F",
        width: "50px"
      })), external_react_default.a.createElement("td", null, "LUSS Comeback 90s Tee"), external_react_default.a.createElement("td", null, "\u0E3F890"), external_react_default.a.createElement("td", null, external_react_default.a.createElement("div", {
        className: "chip"
      }, external_react_default.a.createElement("img", {
        src: person2_default.a
      }), " Steve Smith")), external_react_default.a.createElement("td", null, external_react_default.a.createElement("a", {
        href: "details.html",
        className: "btn green "
      }, "Details"))), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        src: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F",
        width: "50px"
      })), external_react_default.a.createElement("td", null, "LUSS Reflective Tee \"Comeback\""), external_react_default.a.createElement("td", null, "\u0E3F890"), external_react_default.a.createElement("td", null, external_react_default.a.createElement("div", {
        className: "chip"
      }, external_react_default.a.createElement("img", {
        src: person3_default.a
      }), " Ellen Williams")), external_react_default.a.createElement("td", null, external_react_default.a.createElement("a", {
        href: "details.html",
        className: "btn green "
      }, "Details")))))))), external_react_default.a.createElement("div", {
        className: "col s12 m6 l4"
      }, external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("span", {
        className: "card-title"
      }, "Quick Todos"), external_react_default.a.createElement("form", {
        id: "todo-form"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        id: "todo",
        type: "text",
        placeholder: "Add Todo..."
      }))), external_react_default.a.createElement("ul", {
        className: "collection todos"
      }, external_react_default.a.createElement("li", {
        className: "collection-item"
      }, external_react_default.a.createElement("div", null, "Todo One", external_react_default.a.createElement("a", {
        href: "#!",
        className: "secondary-content delete"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "close")))), external_react_default.a.createElement("li", {
        className: "collection-item"
      }, external_react_default.a.createElement("div", null, "Todo Two", external_react_default.a.createElement("a", {
        href: "#!",
        className: "secondary-content delete"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "close"))))))))));
    }
  }]);

  return RecentPosts;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/admin/Dashboard.js
function Dashboard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Dashboard_typeof = function _typeof(obj) { return typeof obj; }; } else { Dashboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Dashboard_typeof(obj); }

function Dashboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dashboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dashboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dashboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dashboard_defineProperties(Constructor, staticProps); return Constructor; }

function Dashboard_possibleConstructorReturn(self, call) { if (call && (Dashboard_typeof(call) === "object" || typeof call === "function")) { return call; } return Dashboard_assertThisInitialized(self); }

function Dashboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Dashboard_getPrototypeOf(o) { Dashboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Dashboard_getPrototypeOf(o); }

function Dashboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Dashboard_setPrototypeOf(subClass, superClass); }

function Dashboard_setPrototypeOf(o, p) { Dashboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Dashboard_setPrototypeOf(o, p); }





if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(5);
}

var Dashboard_Dashboard =
/*#__PURE__*/
function (_Component) {
  Dashboard_inherits(Dashboard, _Component);

  function Dashboard() {
    Dashboard_classCallCheck(this, Dashboard);

    return Dashboard_possibleConstructorReturn(this, Dashboard_getPrototypeOf(Dashboard).apply(this, arguments));
  }

  Dashboard_createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Visitors_Visitors, null), external_react_default.a.createElement(RecentPosts_RecentPosts, null));
    }
  }]);

  return Dashboard;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./pages/kamoo/index.js




var kamoo_Index = function Index(props) {
  return external_react_default.a.createElement(Layout["a" /* default */], {
    title: "LUSS Official | Dash borad",
    pages: "index"
  }, external_react_default.a.createElement(Dashboard_Dashboard, null));
};

/* harmony default export */ var kamoo = __webpack_exports__["default"] = (kamoo_Index);

/***/ })
/******/ ]);