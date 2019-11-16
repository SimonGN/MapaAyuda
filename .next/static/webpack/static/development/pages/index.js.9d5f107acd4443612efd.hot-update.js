webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardExperience/CardExperience.js":
/*!*****************************************************!*\
  !*** ./components/CardExperience/CardExperience.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardExperienceStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardExperienceStyle */ "./components/CardExperience/CardExperienceStyle.js");
/* harmony import */ var _styles_fontsStyles_paragraphMedium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphMedium */ "./styles/fontsStyles/paragraphMedium.js");





var CardExperience = function CardExperience(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardExperienceStyle__WEBPACK_IMPORTED_MODULE_2__["CardExperienceStyle"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (CardExperience);

/***/ }),

/***/ "./components/CardExperience/CardExperienceStyle.js":
/*!**********************************************************!*\
  !*** ./components/CardExperience/CardExperienceStyle.js ***!
  \**********************************************************/
/*! exports provided: CardExperienceStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardExperienceStyle", function() { return CardExperienceStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n    @media only screen and (min-width:415px) and (max-width:768px){\n        \n    }\n    @media only screen and (min-width:769px) and (max-width:1024px){\n        \n    }\n    @media only screen and (min-width:1025px) and (max-width:1440px){\n        \n    }\n    @media only screen and (min-width:1441px){\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CardExperienceStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());


/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyle */ "./components/Header/HeaderStyle.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _CardExperience_CardExperience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardExperience/CardExperience */ "./components/CardExperience/CardExperience.js");
/* harmony import */ var _styles_fontsStyles_paragraphMedium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphMedium */ "./styles/fontsStyles/paragraphMedium.js");
/* harmony import */ var _styles_fontsStyles_paragraphMediumMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphMediumMobile */ "./styles/fontsStyles/paragraphMediumMobile.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);










var changeLanguage = function changeLanguage(language, setLangauge) {
  _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].changeLanguage(language);
  setLangauge(language);
};

var Header = function Header(props) {
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      language = _useState2[0],
      setLangauge = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_3__["HeaderStyle"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphMedium__WEBPACK_IMPORTED_MODULE_6__["default"], null, t("intro")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: t("button"),
    color: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardExperience_CardExperience__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])("home")(Header));

/***/ })

})
//# sourceMappingURL=index.js.9d5f107acd4443612efd.hot-update.js.map