webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardExperience/CardExperience.js":
/*!*****************************************************!*\
  !*** ./components/CardExperience/CardExperience.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardExperienceStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardExperienceStyle */ "./components/CardExperience/CardExperienceStyle.js");
/* harmony import */ var _styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphBody */ "./styles/fontsStyles/paragraphBody.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);








var card = function card() {
  return card.map(function (member, i) {
    var description = member.description,
        conutry = member.conutry,
        img = member.img;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-experience",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "img"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "imgFondo"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "imgPeople"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "#999999"
    }, conutry), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, description)));
  });
};

var changeLanguage = function changeLanguage(language, setLangauge) {
  _i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].changeLanguage(language);
  setLangauge(language);
};

var CardExperience = function CardExperience(props) {
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].language),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      language = _useState2[0],
      setLangauge = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardExperienceStyle__WEBPACK_IMPORTED_MODULE_3__["CardExperienceStyle"], null, card(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: t("button1"),
    color: "#F1A409",
    backgroundColor: "#FCEDCE",
    size: "14px"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])("home")(CardExperience));

/***/ })

})
//# sourceMappingURL=index.js.0b5b8f483707799ddaa7.hot-update.js.map