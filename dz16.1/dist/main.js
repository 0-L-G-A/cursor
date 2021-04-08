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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: rgb(148, 25, 25);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dz16/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dz16/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dz16/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dz16/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/homeworks/dz1.js":
/*!******************************!*\
  !*** ./src/homeworks/dz1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz1 = () => {\n\nconst applePrice = 15.678;\nconst avokadoPrice = 123.965;\nconst mangoPrice = 90.2345;\n\nconst maxPrice = Math.max(applePrice, avokadoPrice, mangoPrice);\nconst minPrice = Math.min(applePrice, avokadoPrice, mangoPrice);\nconst priceOfAllGoods = mangoPrice + avokadoPrice + applePrice;\n\nconsole.log(`Max price is ${maxPrice}`);\nconsole.log(`Min price is  ${minPrice}`);\nconsole.log(`Price of all goods is  ${priceOfAllGoods}`);\n\n\nconst roundedApplePrice = parseInt(applePrice);\nconst roundedAvokadoPrice = parseInt(avokadoPrice);\nconst roundedMangoPrice = parseInt(mangoPrice);\n\nconst priceOfAllGoodsWithoutCoins = roundedMangoPrice + roundedAvokadoPrice + roundedApplePrice;\nconsole.log(`Price of all goods without coins is  ${priceOfAllGoodsWithoutCoins}`);\n \n\nfunction ceilTo100(num){\n    return Math.round(num/100)*100\n}\nconsole.log(\"Sum rounded to 100 -\", (ceilTo100(priceOfAllGoodsWithoutCoins)));\n\nconst isSumEven = priceOfAllGoodsWithoutCoins % 2 === 0;\nconsole.log(isSumEven ? `The price of all goods is even number? ${isSumEven}` : `The price of all goods is even number? ${isSumEven}`);\n\nconst magicNum = 500;\nconst restFrom500 = Number(magicNum - priceOfAllGoods).toFixed(2);\nconsole.log(`The rest from 500 is ${restFrom500}`);\n\nconst fixedApplePrice = Number(applePrice.toFixed(2));\nconst fixedAvokadoPrice = Number(avokadoPrice.toFixed(2));\nconst fixedMangoPrice = Number(mangoPrice.toFixed(2));\nconst summOfFixedFruits = (fixedApplePrice + fixedAvokadoPrice + fixedMangoPrice);\nconst sumDivededto3 = summOfFixedFruits/3;\nconst sum = Number(sumDivededto3.toFixed(2));\nconsole.log(`Average mean is\" ${sum}`);\n\nconst discount = Math.random();\nconst fixedDiscount = Number(discount.toFixed(2));\nconst priceWithDiscount = Number((summOfFixedFruits - fixedDiscount).toFixed(2));\nconst nettoProfit = Number(((summOfFixedFruits/2) - fixedDiscount).toFixed(2));\nconsole.log(`Price to pay is ${priceWithDiscount}`);\nconsole.log(`Profit of netto is ${nettoProfit}`);\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW1--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz1);\n\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz1.js?");

/***/ }),

/***/ "./src/homeworks/dz2.js":
/*!******************************!*\
  !*** ./src/homeworks/dz2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz2 = () => {\n\nlet firstInputedNumber;\ndo {\n    firstInputedNumber = parseInt(prompt('Put down first number'));\n} while(Number.isNaN(firstInputedNumber));\nconsole.log('%c%s', 'font: 1.4em/1 Arial;' ,`You wrote down number ${firstInputedNumber}`);\n\nlet secondInputedNumber;\ndo {\n    secondInputedNumber = parseInt(prompt('Good job. Put down your second number'));\n} while(Number.isNaN(secondInputedNumber));\nconsole.log('%c%s', 'font: 1.4em/1 Arial;' ,`You wrote down second number. It is ${secondInputedNumber}`);\n\nlet missEvenNumbers;\nconfirm(\"Do you want to miss all even numbers? Are you sure?\") ? missEvenNumbers = true : missEvenNumbers = false;\n\nlet smallerNumber;\nlet biggerNumber;\n\nif (firstInputedNumber > secondInputedNumber) {\n    smallerNumber = secondInputedNumber;\n    biggerNumber = firstInputedNumber;\n}else{\n    smallerNumber = firstInputedNumber;\n    biggerNumber = secondInputedNumber;\n}\n\nlet factorialFromNToM = 0;\nfor(let count = smallerNumber; count <= biggerNumber; count++){\n    if(missEvenNumbers){\n        if(count % 2 === 0){\n            continue;\n        }   \n    }\n    factorialFromNToM += count;\n}\nconsole.log('%c%s', 'color: crimson; font: 1.6em/1 Arial;' , `Sum of all number from ${smallerNumber} to ${biggerNumber} is -  ${factorialFromNToM}`)\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW2--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz2);\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz2.js?");

/***/ }),

/***/ "./src/homeworks/dz3.js":
/*!******************************!*\
  !*** ./src/homeworks/dz3.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz3 = () => {\n\nconst getMaxDigit = (number) => Math.max(...Array.from(String(number)).map(item => parseInt(item)))\n\nconsole.log(`F1. Max digit from 4572 is: ${getMaxDigit(4572)}`);\n\nfunction raiseToPower(number, power){\n    if (power > 0){\n        let sum = number;\n        for(let i = 1; i < power; i++){\n            sum = sum * number;\n        }\n        return sum;\n    }else{\n        return \"OOPS!\"  \n    }\n}\nconsole.log(`F2. Third power of 4 is: ${raiseToPower(4, 3)}`);\n\nfunction formatName(name){\n    String(name);\n    return (name.slice(0, 1)).toUpperCase() + (name.slice(1)).toLowerCase();\n}\nconsole.log(`F3. Formated name from \"olha\" is: ${formatName(\"olha\")} `);\n\nfunction getNettoSalary(salary){\n    const taxes = 19.5;\n    return (Number(salary)) - ((Number(salary)/100)*taxes);\n}\nconsole.log(`F4. Your salary before taxes was: 12500. Your salary after taxes is: ${getNettoSalary(12500)}`);\n\nconst getRandomNumber = (min, max) => Number(Math.random()*(max-min)+min).toFixed();\nconsole.log(`F5. Random number from 1 to 100 is: ${getRandomNumber(1, 100)}`);\n\nfunction countLetter(letter, word){\n    const lowerCasedWord = word.toLowerCase();\n    const lowerCasedLetter = letter.toLowerCase();\n    let sumOfLetter = 0;\n    for(let i = 0; i <= word.length; i++){\n        if(lowerCasedWord[i] === lowerCasedLetter){\n            sumOfLetter ++;\n        }\n    }\n    return sumOfLetter;\n}\nconsole.log(`F6. Sum of letter \"f\" in word \"difference\" is: ${countLetter(\"f\", \"difference\")}`);\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW3--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz3);\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz3.js?");

/***/ }),

/***/ "./src/homeworks/dz4.js":
/*!******************************!*\
  !*** ./src/homeworks/dz4.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz4 = () => {\n\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nconst marks = [4, 5, 5, 3, 4, 5];\n\nlet girls = [students[2], students[3], students[5]];\nlet boys = [students[0], students[1], students[4]];\n\nfunction getPairsOfStudents(girls, boys){\n    let pairs = [];\n    for (let i = 0; i < 3; i++){\n        pairs[i] = [girls[i], boys[i]];\n    }\n    return pairs;\n}\nconst pairsOfStudents = getPairsOfStudents(girls, boys);\n\nfunction giveThemes(pairsOfStudents, themes){\n    let pairsWithThemes = [];\n    for (let i = 0; i < 3; i++){\n        pairsWithThemes[i] = [pairsOfStudents[i].join([\" i \"]), themes[i]];\n    }\n    return pairsWithThemes;\n}\nconst pairsGaveThemes = giveThemes(pairsOfStudents, themes);\n\nfunction giveMarks(students, marks){\n    let studentsWithMarks = [];\n    for (let i = 0; i < 6; i++){\n        studentsWithMarks[i] = [students[i], marks[i]];\n    }\n    return studentsWithMarks;\n}\nconst studentsGaveMarks = giveMarks(students, marks);\n\nfunction getRandomMark(pairsOfStudents, themes){\n    let pairWithRandomMark = [];\n    const symbols = \"12345\";\n    for (var i = 0; i < 3; i++){\n        pairWithRandomMark[i] = [pairsOfStudents[i].join([\" i \"]), themes[i], symbols.charAt(Math.floor(Math.random() * symbols.length))];     \n    }\n    return pairWithRandomMark;\n}\nconst pairsWithMarks = getRandomMark(pairsOfStudents, themes);\n\nconsole.log(`Масив поділених на пари студентів:`);\nconsole.log(pairsOfStudents);\nconsole.log(`Пари після отримання тем:`);\nconsole.log(pairsGaveThemes);\nconsole.log(`Індивідуальна оцінка кожного студента:`);\nconsole.log(studentsGaveMarks);\nconsole.log(`Оцінка пари за проект:`);\nconsole.log(pairsWithMarks);\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW4--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz4);\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz4.js?");

/***/ }),

/***/ "./src/homeworks/dz5.js":
/*!******************************!*\
  !*** ./src/homeworks/dz5.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz5 = () => {\n\nconst getRandomArray = (length, min, max) => {return Array.from(Array(length)).map(x=>Number(Math.random()*(max-min)+min).toFixed())}\n\nconst arrayForGetModa = [1, 1, 2, 2.5, 2.2, 3, 4, 5, 6, 6, 7, 9, 10, 13, 16];\nfunction getModa(arr) {\n    let arrayOfObjects = []; \n    let modedArr = [];\n    let uniqueArray = new Set(arr); \n    for (const i of uniqueArray) {  \n      if (!Number.isInteger(Number(i))){continue}\n      const filteredNum = arr.filter((num) => i === num); \n      arrayOfObjects.push({ number: i, frequency: filteredNum.length });\n    }\n  \n    arrayOfObjects.sort((a, b) => {return b.frequency - a.frequency});\n  \n    arrayOfObjects.forEach(value => {\n      if (value.frequency === arrayOfObjects[0].frequency) {\n        modedArr.push(value.number);\n      }\n    });\n    return modedArr;\n  }\n\nconst arrayForGetAverage = [1, 2.5, 3, 4, 6, 6.7, 7, 9];\nfunction getAverage(arr){\n  const filteredArray = arr.filter((element) => Number.isInteger(element));\n  const reducer = (accumulator, currentValue) => accumulator + currentValue;\n  return (filteredArray.reduce(reducer))/filteredArray.length;\n  }\n \nconst arrayForMedian = [12, 7, 2, 8, 10, 4, 6, 3, 5.5, 6.4];\nfunction getMedian(arr){\n  let median = [];\n  const filteredArray = arr.filter((element) => Number.isInteger(element));\n  const sortedArray = filteredArray.sort((a, b) => a - b);\n  const halfLengthOfSortedArray = Math.floor(sortedArray.length/2);\n  sortedArray.length % 2 === 0 ? median = (sortedArray[halfLengthOfSortedArray - 1] + sortedArray[halfLengthOfSortedArray])/2 : median = sortedArray[halfLengthOfSortedArray];\n  return median;\n  }\n\nconst arrayForFilterEvenNumbers = [1, 2, 5, 6, 8, 9, 13, 15, 20];\nconst filterEvenNumbers = (arr) => {return arr.filter((element) => !(element % 2 === 0))};\n\nconst arrayOfDifferentNumbers = [-5, -4, -1, 0, 2, 5, 7];\nconst countPositiveNumbers = (arr) => {return arr.filter((element) => element > 0)};\n\nconst arrayForDividing = [5, 8, 20, 6, 44, 50, 35, 88];\nconst getDividedByFive = (arr) => {return arr.filter((element) => (element % 5 === 0))}\n\n//1\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 1--------`);\nconsole.log(`Random array from 1 to 10. It has 4 elements: ${getRandomArray(4, 1, 10)}`);\n//2\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 2--------`);\nconsole.log(`I created array from 1 to 20. It has 10 elements:`);\nconsole.log(arrayForGetModa);\nconsole.log(`Moda of my array: ${getModa(arrayForGetModa)}`);\n//3\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 3--------`);\nconsole.log(`Array for getAwerage function: `);\nconsole.log(arrayForGetAverage);\nconsole.log(`Average number of array:`);\nconsole.log(getAverage(arrayForGetAverage));\n//4\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 4--------`);\nconsole.log(`Array for getMedian function:`);\nconsole.log(arrayForMedian);\nconsole.log(`Median of array:`);\nconsole.log(getMedian(arrayForMedian));\n//5\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 5--------`);\nconsole.log(`Array for filterEvenNumbers function:`);\nconsole.log(arrayForFilterEvenNumbers);\nconsole.log(`Filtered array with only odd numbers:`);\nconsole.log(filterEvenNumbers(arrayForFilterEvenNumbers));\n//6\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 6--------`);\nconsole.log(`Array for countPositiveNumbers function:`);\nconsole.log(arrayOfDifferentNumbers);\nconsole.log(`Filtered array with only positive numbers has a length:`);\nconsole.log(countPositiveNumbers(arrayOfDifferentNumbers));\n//7\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 7--------`);\nconsole.log(`Array for dividing by 5 function:`);\nconsole.log(arrayForDividing);\nconsole.log(`Filtered array with numbers, which we can divide by 5:`);\nconsole.log(getDividedByFive(arrayForDividing));\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW5--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz5);\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz5.js?");

/***/ }),

/***/ "./src/homeworks/dz6.js":
/*!******************************!*\
  !*** ./src/homeworks/dz6.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz6 = () => {\n\nconst students = [{\n    name: \"Tanya\",\n    course: 3,\n    subjects: {\n      math: [4, 4, 3, 4],\n      algorithms: [3, 3, 3, 4, 4, 4],\n      data_science: [5, 5, 3, 4]\n    }\n  }, {\n    name: \"Victor\",\n    course: 4,\n    subjects: {\n      physics: [5, 5, 5, 3],\n      economics: [2, 3, 3, 3, 3, 5],\n      geometry: [5, 5, 2, 3, 5]\n    }\n  }, {\n    name: \"Anton\",\n    course: 2,\n    subjects: {\n      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n      english: [5, 3],\n      cosmology: [5, 5, 5, 5]\n    }\n  }];\n  \n  function getSubjects(student){\n    const arrayOfSubjects = Object.keys(student.subjects);\n    const newArray = arrayOfSubjects.map((item) => {return (item.charAt(0).toUpperCase() + item.slice(1)).replace(\"_\", \" \")});\n    return newArray;\n    }\n\n  function getAverageMark(student){\n    const allMarks = (Object.values(student.subjects)).flat(1);\n    return (allMarks.reduce((a, b) => a + b)/allMarks.length).toFixed(2);\n  }\n\n  function getStudentInfo(student){\n    const avMark = getAverageMark(student);\n    const studentInfo = {\n      course: student.course,\n      name: student.name,\n      averageMark: avMark\n    }\n    return studentInfo;\n  }\n\n  function getStudentsNames(students){\n    const studentsNames = students.map(student => student.name);\n    return studentsNames.sort();\n  }\n\n  function getBestStudent(students){\n    let res = [];\n    for (const i of students) {  \n      res.push({ name: i.name, averageMark: getAverageMark(i) });\n    }\n    res.sort((a, b) => {return b.averageMark - a.averageMark});\n    return res[0].name;\n  }\n\n  function calculateWordLetters(word){\n    let res = {};\n    let mySet = new Set(word.toLowerCase()); \n    for (const i of mySet){\n      let amountSameLetters = ((word.toLowerCase()).split('')).filter((letter) => i === letter); \n      res[i] = amountSameLetters.length;\n    }\n    return res;\n  }\n\n//1\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 1--------`);\nconsole.log(`Функція, що повертає список предметів для окремого студента`);\nconsole.log(getSubjects(students[0]));\n//2\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 2--------`);\nconsole.log(`Функція, що повертає середню оцінку по усім предметам для переданого студента`);\nconsole.log(getAverageMark(students[0]));\n//3\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 3--------`);\nconsole.log(`Функція, що повертає курс, імя і середню оцінку студента `);\nconsole.log(getStudentInfo(students[0]));\n//4\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 4--------`);\nconsole.log(`Функція, що повертає імена студентів у алфавітному порядку`);\nconsole.log(getStudentsNames(students));\n//5\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 5--------`);\nconsole.log(`Функція, яка повертає кращого студента зі списку по показнику середньої оцінки`);\nconsole.log(getBestStudent(students));\n//6\nconsole.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 6--------`);\nconsole.log(`Функція, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.`);\nconsole.log(calculateWordLetters(\"Test\"));\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW6--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz6);\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz6.js?");

/***/ }),

/***/ "./src/homeworks/dz7.js":
/*!******************************!*\
  !*** ./src/homeworks/dz7.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz7 = () => {\n\nconst ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };\nconst latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };\nconst litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };\n\nfunction getMyTaxes(salary){\n   return this.tax * salary;\n}\n\nconsole.log(getMyTaxes.call(ukraine, 200));\n\nfunction getMiddleTaxes(){\n    return Number((this.tax * this.middleSalary).toFixed(2));\n}\n\nconsole.log(getMiddleTaxes.call(ukraine));\n\nfunction getTotalTaxes(){\n    return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));\n}\nconsole.log(getTotalTaxes.call(latvia));\n\nconst getMySalary = function(country) {\n    setInterval(() => {\n        const newObject = {};\n        newObject.salary = Math.trunc(Math.random()*(2000-1500)+1500);\n        newObject.taxes = +(newObject.salary * country.tax).toFixed();\n        newObject.profit = +(newObject.salary - newObject.taxes).toFixed();\n        console.log('After 10 seconds', newObject);\n    }, 10000);\n}\ngetMySalary(ukraine);\n\nsetTimeout(() => { clearInterval(getMySalary); alert('stop'); }, 50000);\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW7--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz7);\n\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz7.js?");

/***/ }),

/***/ "./src/homeworks/dz8.js":
/*!******************************!*\
  !*** ./src/homeworks/dz8.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dz8 = () => {\n\nclass Student{\n    constructor(university, course, fullName, marks = [5, 4, 4, 5], isDismiss = false){\n        this.university = university;\n        this.course = course;\n        this.fullName = fullName;\n        this.marks = marks;\n        this.isDismiss = isDismiss;\n    }\n\n    getInfo(){\n        return `Student: ${this.fullName} of ${this.course} course, ${this.university}`;\n    }\n\n    get getMarks(){\n        return !this.isDismiss ? this.marks : null;\n    }\n\n    set setMarks(mark){\n        return !this.isDismiss ? this.marks.push(mark) : null;\n    }\n\n    getAverageMark(){\n        const avMark = this.marks.reduce(function(a, b) {return a + b}, 0) / this.marks.length;\n        return !this.isDismiss ? avMark : null;\n    }\n\n    dismiss() {\n        this.isDismiss = true;\n    }\n\n    recover() {\n        this.isDismiss = false;\n    }\n}\n\nconst student = new Student('Drogobych pedagogical university', '5', 'Olga Lyubas');\nconsole.log(\"Іnfo about student:\", student.getInfo());\nconsole.log(`List of marks: ${student.getMarks}`);\nstudent.setMarks = 5;\nconsole.log(`List after setting new mark 5: ${student.getMarks}`);\nconsole.log(`Student's average mark: ${student.getAverageMark()}`);\nstudent.dismiss();\nconsole.log(`Marks after dismissing: ${student.getMarks}`);\nstudent.recover();\nconsole.log(`Marks after recovering: ${student.getMarks}`);\n\nreturn '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW8--------`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dz8);\n\n//# sourceURL=webpack://dz16/./src/homeworks/dz8.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homeworks_dz1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeworks/dz1 */ \"./src/homeworks/dz1.js\");\n/* harmony import */ var _homeworks_dz2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeworks/dz2 */ \"./src/homeworks/dz2.js\");\n/* harmony import */ var _homeworks_dz3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeworks/dz3 */ \"./src/homeworks/dz3.js\");\n/* harmony import */ var _homeworks_dz4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeworks/dz4 */ \"./src/homeworks/dz4.js\");\n/* harmony import */ var _homeworks_dz5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeworks/dz5 */ \"./src/homeworks/dz5.js\");\n/* harmony import */ var _homeworks_dz6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeworks/dz6 */ \"./src/homeworks/dz6.js\");\n/* harmony import */ var _homeworks_dz7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homeworks/dz7 */ \"./src/homeworks/dz7.js\");\n/* harmony import */ var _homeworks_dz8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homeworks/dz8 */ \"./src/homeworks/dz8.js\");\n\n\n\n\n\n\n\n\n\n\n\nlet chosenHW = Number(prompt('Please, select number of homework, which you want to run?', 1));\n\nswitch (chosenHW) {\n  \n  case 1:\n    console.log((0,_homeworks_dz1__WEBPACK_IMPORTED_MODULE_1__.default)());\n    break;\n  case 2:\n    console.log((0,_homeworks_dz2__WEBPACK_IMPORTED_MODULE_2__.default)());\n    break;\n  case 3:\n    console.log((0,_homeworks_dz3__WEBPACK_IMPORTED_MODULE_3__.default)());\n    break;\n  case 4:\n    console.log((0,_homeworks_dz4__WEBPACK_IMPORTED_MODULE_4__.default)());\n    break;\n  case 5:\n    console.log((0,_homeworks_dz5__WEBPACK_IMPORTED_MODULE_5__.default)());\n    break;\n  case 6:\n    console.log((0,_homeworks_dz6__WEBPACK_IMPORTED_MODULE_6__.default)());\n    break;\n  case 7:\n    console.log((0,_homeworks_dz7__WEBPACK_IMPORTED_MODULE_7__.default)());\n    break;\n  case 8:\n    console.log((0,_homeworks_dz8__WEBPACK_IMPORTED_MODULE_8__.default)());\n    break;\n  default:\n    console.log((0,_homeworks_dz1__WEBPACK_IMPORTED_MODULE_1__.default)());\n}\n\n//# sourceURL=webpack://dz16/./src/index.js?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("bd9b1c72de0328da01ba")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dz16:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatedz16"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;