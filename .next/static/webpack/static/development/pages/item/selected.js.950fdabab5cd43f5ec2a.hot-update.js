webpackHotUpdate("static\\development\\pages\\item\\selected.js",{

/***/ "./components/item/Selected.js":
/*!*************************************!*\
  !*** ./components/item/Selected.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\luss\\luss-official-core\\components\\item\\Selected.js";

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

var Selected =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Selected, _React$Component);

  function Selected(props) {
    var _this;

    _classCallCheck(this, Selected);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Selected).call(this, props));
    _this.state = {
      imgActive: props.data.img[0]
    };
    return _this;
  }

  _createClass(Selected, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('select').formSelect();
      $('.tabs').tabs();
      $('.materialboxed').materialbox();
    }
  }, {
    key: "headleSelectedImgView",
    value: function headleSelectedImgView(img) {
      this.setState({
        imgActive: img
      });
    }
  }, {
    key: "renderImgViewsContent",
    value: function renderImgViewsContent(imgs) {
      var _this2 = this;

      return imgs.map(function (img) {
        if (img == _this2.state.imgActive) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: img,
            className: "img-views-content active-img",
            onClick: _this2.headleSelectedImgView.bind(_this2, img),
            key: img,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: img,
            className: "img-views-content",
            onClick: _this2.headleSelectedImgView.bind(_this2, img),
            key: img,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          });
        }
      });
    }
  }, {
    key: "renderSelectSize",
    value: function renderSelectSize(sizes) {
      if (sizes.length == 4) {
        return sizes.map(function (size, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            defaultValue: size,
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, size);
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          defaultValue: sizes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, sizes);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 m7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.renderImgViewsContent(this.props.data.img)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.imgActive,
        className: "materialboxed",
        width: "100%",
        height: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 m5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.props.data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Color : ", this.props.data.color), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Size :", this.props.data.size.length == 4 ? ' S / M / L / XL' : ' One Size')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "green-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "In stock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "\u0E3F", this.props.data.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        defaultValue: "",
        disabled: true,
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Select Option")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "SIZE ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "red-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn red  waves-effect waves-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "ADD TO CART"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn white red-text waves-effect waves-red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "ADD TO WISHLIST"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "tabs tabs-width-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#tab1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Description")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#tab2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Additional Information")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "tab1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, this.props.data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Color : ", this.props.data.color), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Size :", ' ', this.props.data.size.length == 4 ? ' S / M / L / XL' : ' One Size'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Price : ", this.props.data.price, " bath.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "tab2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "???"))))));
    }
  }]);

  return Selected;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Selected);

/***/ })

})
//# sourceMappingURL=selected.js.950fdabab5cd43f5ec2a.hot-update.js.map