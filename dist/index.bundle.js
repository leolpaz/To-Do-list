/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./enter.png */ \"./src/enter.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.list-container {\\r\\n  list-style-type: none;\\r\\n  border: 1px solid #ccc;\\r\\n  box-shadow: 0 2px 10px rgb(160, 158, 158);\\r\\n  padding: 0;\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 4%;\\r\\n  align-items: center;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.over {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.cursor-grab {\\r\\n  cursor: grab;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.list-input {\\r\\n  margin: 4%;\\r\\n  height: 20px;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  font-size: 18px;\\r\\n  width: 90%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat scroll;\\r\\n  background-position: 99% 50%;\\r\\n  background-size: 16px;\\r\\n  filter: invert(60%);\\r\\n  padding-left: 2%;\\r\\n}\\r\\n\\r\\n.list-input-clicked {\\r\\n  margin: 4%;\\r\\n  height: 20px;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  font-size: 18px;\\r\\n  width: 90%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat scroll;\\r\\n  background-position: 99% 50%;\\r\\n  background-size: 16px;\\r\\n  padding-left: 2%;\\r\\n}\\r\\n\\r\\n.title-container {\\r\\n  margin: 4%;\\r\\n  font-size: 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title-container img {\\r\\n  height: 23px;\\r\\n  width: 23px;\\r\\n  filter: invert(60%);\\r\\n}\\r\\n\\r\\n.list-item input {\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.list-item img {\\r\\n  height: 23px;\\r\\n  width: 23px;\\r\\n  filter: invert(60%);\\r\\n}\\r\\n\\r\\n.list-button {\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n  border: none;\\r\\n  border-top: 1px solid #ccc;\\r\\n  padding: 3%;\\r\\n  font-size: 18px;\\r\\n  color: rgb(150, 150, 150);\\r\\n}\\r\\n\\r\\n.list-box {\\r\\n  height: 18px;\\r\\n  width: 18px;\\r\\n}\\r\\n\\r\\n.list-label {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  width: 90%;\\r\\n  font-size: 16px;\\r\\n  display: inline-flex;\\r\\n  align-self: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://To-Do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://To-Do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://To-Do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://To-Do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://To-Do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://To-Do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://To-Do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://To-Do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://To-Do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://To-Do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://To-Do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addremove.js":
/*!**************************!*\
  !*** ./src/addremove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"removeAll\": () => (/* binding */ removeAll)\n/* harmony export */ });\nfunction addTask(arr, value) {\n  arr.push({ description: `${value}`, completed: false, index: (arr.length + 1) });\n  localStorage.setItem('taskArray', JSON.stringify(arr));\n}\n\nfunction removeItem(event, arr) {\n  const itemIndex = event.target.getAttribute('value');\n  arr.splice(itemIndex, 1);\n  arr.forEach(item => {\n    if (item.index > itemIndex) {\n      item.index -= 1;\n    }\n  });\n  localStorage.setItem('taskArray', JSON.stringify(arr));\n}\n\nfunction edit(event, arr, value) {\n  const inputField = document.getElementById(`input${value}`);\n  arr[value].description = `${inputField.value}`;\n  localStorage.setItem('taskArray', JSON.stringify(arr));\n}\n\nfunction removeAll(arr) {\n  arr = arr.filter(element => element.completed === false);\n  arr.forEach((element, i) => {\n    element.index = i + 1;\n  });\n  localStorage.setItem('taskArray', JSON.stringify(arr));\n  return arr;\n}\n\n\n//# sourceURL=webpack://To-Do-list/./src/addremove.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changed)\n/* harmony export */ });\nfunction changed(id, arr) {\n  arr[id].completed = !arr[id].completed;\n  localStorage.setItem('taskArray', JSON.stringify(arr));\n}\n\n//# sourceURL=webpack://To-Do-list/./src/complete.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragDrop\": () => (/* binding */ dragDrop),\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"dragLeave\": () => (/* binding */ dragLeave)\n/* harmony export */ });\nlet dragIndex;\nconst list = document.querySelector('#main-list');\n\nfunction dragStart() {\n  dragIndex = this.closest('li').getAttribute('value');\n}\n\nfunction dragOver(e) {\n  e.preventDefault();\n  this.classList.add('over');\n}\n\nfunction dragSave(from, to) {\n  const taskArray = JSON.parse(localStorage.getItem('taskArray') || '[]');\n  const temp = taskArray[to];\n  taskArray[to] = taskArray[from];\n  taskArray[from] = temp;\n  localStorage.setItem('taskArray', JSON.stringify(taskArray));\n  const forceChange = new Event('change', { bubbles: true });\n  list.dispatchEvent(forceChange);\n}\n\nfunction swapItems(fromIndex, toIndex) {\n  const items = document.querySelectorAll('.list-item');\n  const one = document.querySelector(`li[value=\"${fromIndex}\"] p`);\n  const two = document.querySelector(`li[value=\"${toIndex}\"] p`);\n  items[fromIndex].insertBefore(two, items[fromIndex].children[1]);\n  items[toIndex].insertBefore(one, items[toIndex].children[1]);\n  dragSave(fromIndex, toIndex);\n}\n\nfunction dragDrop() {\n  const dragEndIndex = this.getAttribute('value');\n  swapItems(dragIndex, dragEndIndex);\n  this.classList.remove('over');\n}\n\nfunction dragLeave() {\n  this.classList.remove('over');\n}\n\n\n\n//# sourceURL=webpack://To-Do-list/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loading_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.png */ \"./src/loading.png\");\n/* harmony import */ var _verticaldots_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verticaldots.png */ \"./src/verticaldots.png\");\n/* harmony import */ var _trashcan_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trashcan.png */ \"./src/trashcan.png\");\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete */ \"./src/complete.js\");\n/* harmony import */ var _addremove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addremove */ \"./src/addremove.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n\n\n\n\n\n\n\n\nconst mainList = document.getElementById('main-list');\nlet taskArray = JSON.parse(localStorage.getItem('taskArray') || '[]');\nconst forceChange = new Event('change', { bubbles: true });\n\nfunction paintList() {\n  mainList.innerHTML = '';\n  const loadingIcon = new Image();\n  loadingIcon.src = _loading_png__WEBPACK_IMPORTED_MODULE_1__;\n  const titleContainer = document.createElement('div');\n  const paragraph = document.createElement('p');\n  titleContainer.classList.add('title-container');\n  paragraph.classList.add('list-tittle');\n  paragraph.innerHTML = \"Today's To Do\";\n  titleContainer.appendChild(paragraph);\n  titleContainer.appendChild(loadingIcon);\n  const addInput = document.createElement('input');\n  addInput.classList.add('list-input');\n  addInput.setAttribute('placeholder', 'Add to your list...');\n  mainList.appendChild(titleContainer);\n  mainList.appendChild(addInput);\n  taskArray.forEach((element, index) => {\n    const verticalDotsIcon = new Image();\n    verticalDotsIcon.setAttribute('value', index);\n    verticalDotsIcon.setAttribute('draggable', false);\n    verticalDotsIcon.classList.add('cursor-grab');\n    verticalDotsIcon.src = _verticaldots_png__WEBPACK_IMPORTED_MODULE_2__;\n    const listItem = document.createElement('li');\n    listItem.draggable = true;\n    listItem.classList.add('list-item');\n    listItem.value = index;\n    listItem.innerHTML = `<input id=\"${index}\" value=\"${element.completed}\" type=\"checkbox\" class=\"list-box\"><p class=\"description\" value=\"${index}\">${element.description}</p>`;\n    if (element.completed === true) {\n      listItem.innerHTML = `<input id=\"${index}\" value=\"${element.completed}\" checked=\"checked\"\" type=\"checkbox\" class=\"list-box\">\n      <p class=\"description\" style=\"text-decoration:line-through;color:#ccc\" value=\"${index}\">${element.description}</p>`;\n    }\n    listItem.appendChild(verticalDotsIcon);\n    mainList.appendChild(listItem);\n  });\n  const button = document.createElement('button');\n  button.setAttribute('type', 'button');\n  button.classList.add('list-button');\n  button.innerHTML = 'Clear all completed';\n  mainList.appendChild(button);\n}\n\nfunction buttonListener() {\n  const checkboxes = document.querySelectorAll('.list-box');\n  Array.from(checkboxes).forEach(box => {\n    box.addEventListener('change', (event) => {\n      (0,_complete__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event.target.id, taskArray);\n    });\n  });\n}\n\nfunction itemListener() {\n  const addField = document.querySelector('.list-input');\n  addField.addEventListener('click', event => {\n    event.target.setAttribute('class', 'list-input-clicked');\n  });\n  addField.addEventListener('focusout', event => {\n    event.target.setAttribute('class', 'list-input');\n  });\n  addField.addEventListener('keydown', e => {\n    if (e.key === 'Enter') {\n      (0,_addremove__WEBPACK_IMPORTED_MODULE_5__.addTask)(taskArray, addField.value);\n    }\n  });\n}\n\nfunction descriptionListener() {\n  const descriptions = document.querySelectorAll('.description');\n  Array.from(descriptions).forEach((desc) => {\n    desc.addEventListener('click', event => {\n      const checkIfOpened = event.target.id;\n      const value = event.target.getAttribute('value');\n      if (checkIfOpened !== '') {\n        return;\n      }\n      const initialState = event.target.innerHTML;\n      event.target.innerHTML = `<input class=\"description\" id=\"input${value}\" value=\"${taskArray[value].description}\"></input>`;\n      const inputField = document.getElementById(`input${value}`);\n      inputField.focus();\n      const imageChange = document.querySelector(`img[value=\"${value}\"]`);\n      const initialImage = imageChange.src;\n      imageChange.src = _trashcan_png__WEBPACK_IMPORTED_MODULE_3__;\n      imageChange.classList.remove('cursor-grab');\n      const removeListener = (event) => {\n        (0,_addremove__WEBPACK_IMPORTED_MODULE_5__.removeItem)(event, taskArray);\n        mainList.dispatchEvent(forceChange);\n      };\n      imageChange.addEventListener('click', removeListener);\n      inputField.addEventListener('focusout', (e) => {\n        setTimeout(() => {\n          imageChange.removeEventListener('click', removeListener);\n          e.target.outerHTML = initialState;\n          imageChange.src = initialImage;\n          imageChange.classList.add('cursor-grab');\n        }, 600);\n      });\n      inputField.addEventListener('keydown', (e) => {\n        if (e.key === 'Enter') {\n          (0,_addremove__WEBPACK_IMPORTED_MODULE_5__.edit)(event, taskArray, value);\n        }\n      });\n    });\n  });\n}\n\nfunction removeAllListener() {\n  const removeAllBtn = document.querySelector('.list-button');\n  removeAllBtn.addEventListener('click', () => {\n    taskArray = (0,_addremove__WEBPACK_IMPORTED_MODULE_5__.removeAll)(taskArray);\n    mainList.dispatchEvent(forceChange);\n  });\n}\n\nfunction dragListener() {\n  const draggables = document.querySelectorAll('li');\n  draggables.forEach(item => {\n    item.addEventListener('dragstart', _drag__WEBPACK_IMPORTED_MODULE_6__.dragStart);\n    item.addEventListener('dragover', _drag__WEBPACK_IMPORTED_MODULE_6__.dragOver);\n    item.addEventListener('drop', _drag__WEBPACK_IMPORTED_MODULE_6__.dragDrop);\n    item.addEventListener('dragleave', _drag__WEBPACK_IMPORTED_MODULE_6__.dragLeave);\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  paintList();\n  dragListener();\n  buttonListener();\n  itemListener();\n  descriptionListener();\n  removeAllListener();\n});\nmainList.addEventListener('change', () => {\n  taskArray = JSON.parse(localStorage.getItem('taskArray') || '[]');\n  paintList();\n  buttonListener();\n  removeAllListener();\n  dragListener();\n  descriptionListener();\n  itemListener();\n});\n\n\n//# sourceURL=webpack://To-Do-list/./src/index.js?");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"823bc6a8cbbba02040b1.png\";\n\n//# sourceURL=webpack://To-Do-list/./src/enter.png?");

/***/ }),

/***/ "./src/loading.png":
/*!*************************!*\
  !*** ./src/loading.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1a9a6e2426829731ad7.png\";\n\n//# sourceURL=webpack://To-Do-list/./src/loading.png?");

/***/ }),

/***/ "./src/trashcan.png":
/*!**************************!*\
  !*** ./src/trashcan.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c54fc598f9ef454908f.png\";\n\n//# sourceURL=webpack://To-Do-list/./src/trashcan.png?");

/***/ }),

/***/ "./src/verticaldots.png":
/*!******************************!*\
  !*** ./src/verticaldots.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0eede3c3b90190e0f04.png\";\n\n//# sourceURL=webpack://To-Do-list/./src/verticaldots.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;