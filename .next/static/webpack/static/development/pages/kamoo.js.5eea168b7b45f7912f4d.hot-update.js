webpackHotUpdate("static\\development\\pages\\kamoo.js",{

/***/ "./components/admin/Navbar.js":
/*!************************************!*\
  !*** ./components/admin/Navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Router */ "./components/Router.js");
/* harmony import */ var _img_logo_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/logo-black.png */ "./img/logo-black.png");
/* harmony import */ var _img_logo_black_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_logo_black_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_ocean_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/ocean.jpg */ "./img/ocean.jpg");
/* harmony import */ var _img_ocean_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ocean_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_person1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/person1.jpg */ "./img/person1.jpg");
/* harmony import */ var _img_person1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_person1_jpg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\luss\\luss-official-core\\components\\admin\\Navbar.js";

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

  __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
}

var Index =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        sd: true,
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Home"],
        className: "brand-logo black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_logo_black_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        className: "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        "data-activates": "side-nav",
        className: "button-collapse show-on-large right black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "right hide-on-med-and-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.props.pages == 'index' ? 'active' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Admin"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.props.pages == 'posts' ? 'active' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Posts"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Posts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.props.pages == 'comments' ? 'active' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Comments"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Comments")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.props.pages == 'users' ? 'active' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Users"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Users"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "side-nav",
        className: "side-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_ocean_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          marginTop: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_person1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "",
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "John Doe"), ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          marginBottom: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "email white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "jdoe@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Admin"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "dashboard"), " Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Posts"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Posts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Comments"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Comments")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Users"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Users")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "subheader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Account Controls")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "waves-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Logout"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fixed-action-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-floating btn-large red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#post-modal",
        className: "modal-trigger btn-floating grey darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "mode_edit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#category-modal",
        className: "modal-trigger btn-floating  grey darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "folder"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#user-modal",
        className: "modal-trigger btn-floating  grey darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "supervisor_account"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "category-modal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Add Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#!",
        className: "modal-action modal-close btn blue white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "user-modal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Add User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Password")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "password2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Confirm Password"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#!",
        className: "modal-action modal-close btn blue white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Submit")))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=kamoo.js.5eea168b7b45f7912f4d.hot-update.js.map