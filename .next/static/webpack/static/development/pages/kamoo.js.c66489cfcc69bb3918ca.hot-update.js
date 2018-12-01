webpackHotUpdate("static\\development\\pages\\kamoo.js",{

/***/ "./components/admin/Visitors.js":
/*!**************************************!*\
  !*** ./components/admin/Visitors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visitors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _img_person1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/person1.jpg */ "./img/person1.jpg");
/* harmony import */ var _img_person1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_person1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_person2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/person2.jpg */ "./img/person2.jpg");
/* harmony import */ var _img_person2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_person2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_person3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/person3.jpg */ "./img/person3.jpg");
/* harmony import */ var _img_person3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_person3_jpg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\luss\\luss-official-core\\components\\admin\\Visitors.js";

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

var x = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
    borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
    borderWidth: 1
  }]
};

var Visitors =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        class: "section section-visitors grey lighten-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col s12 m6 l8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "card-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: x,
        height: "80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col s12 m6 l4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "collection with-header latest-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        class: "collection-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Latest Comments")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        class: "collection-item avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_person1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "",
        class: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "John Doe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "truncate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "approve green-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Approve"), ' ', "|", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "deny red-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Deny")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        class: "collection-item avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_person2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "",
        class: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Steve Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "truncate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "approve green-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Approve"), ' ', "|", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "deny red-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Deny")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        class: "collection-item avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_person3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "",
        class: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Ellen Williams"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "truncate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "approve green-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Approve"), ' ', "|", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "deny red-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Deny"))))));
    }
  }]);

  return Visitors;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=kamoo.js.c66489cfcc69bb3918ca.hot-update.js.map