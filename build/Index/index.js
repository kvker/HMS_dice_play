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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/less-loader/dist/cjs.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/less-loader/dist/cjs.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  ".ctrls": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "width": "100%",
    "marginBottom": "120px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "fontSize": "24px"
  },
  ".picker-dice-number": {
    "width": "100px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "dashed",
    "borderTopColor": "#d8d8d8",
    "borderRightColor": "#d8d8d8",
    "borderBottomColor": "#d8d8d8",
    "borderLeftColor": "#d8d8d8",
    "paddingTop": "2px",
    "paddingRight": "4px",
    "paddingBottom": "2px",
    "paddingLeft": "4px"
  },
  ".pick-remind": {
    "position": "absolute",
    "left": "0px",
    "top": "-80px",
    "width": "200px",
    "fontSize": "24px",
    "color": "#999999"
  },
  ".change": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "440px",
    "height": "92px",
    "borderRadius": "46px",
    "backgroundColor": "#fc9d5d",
    "color": "#FFFFFF",
    "fontSize": "32px"
  },
  ".dices": {
    "justifyContent": "space-between",
    "alignContent": "space-between",
    "flexWrap": "wrap",
    "width": "400px",
    "height": "400px"
  },
  ".dice": {
    "position": "absolute"
  },
  ".dice-image": {
    "position": "absolute",
    "width": "100px",
    "height": "100px",
    "objectFit": "cover"
  },
  ".di0": {
    "top": "10px",
    "left": "10px"
  },
  ".di1": {
    "top": "10px",
    "left": "10px"
  },
  ".di2": {
    "top": "10px",
    "left": "10px"
  },
  ".di3": {
    "top": "10px",
    "left": "10px"
  },
  ".di4": {
    "top": "10px",
    "left": "10px"
  },
  ".results": {
    "justifyContent": "space-around",
    "width": "100%",
    "borderLeftWidth": "0px",
    "borderBottomWidth": "0px"
  },
  ".straight": {
    "lineHeight": "96px",
    "width": "100%",
    "textAlign": "center",
    "fontSize": "48px",
    "color": "#0000aa"
  },
  ".result": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "12%",
    "fontSize": "32px",
    "color": "#333333"
  },
  ".dice-small": {
    "height": "40px",
    "width": "40px"
  },
  ".help": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "80px",
    "height": "80px",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "backgroundColor": "#fc9d5d",
    "color": "#FFFFFF",
    "fontSize": "32px",
    "borderRadius": "8px"
  }
}

/***/ }),

/***/ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return this.diceImgs[this.$item-1]}
      },
      "repeat": function () {return this.dices},
      "style": function () {return this.diceStyles[this.$idx]},
      "classList": function () {return ['dice-image', 'di'+this.$idx]}
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.lessThenMin&&this.played},
      "classList": [
        "results"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.points)+'点'}
          },
          "classList": [
            "straight"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.results.length===1},
      "classList": [
        "results"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "顺子, 全部 0 个"
          },
          "classList": [
            "straight"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return !(this.results.length===1)},
      "classList": [
        "results"
      ],
      "children": [
        {
          "type": "div",
          "attr": {
            "tid": "dice"
          },
          "classList": [
            "result"
          ],
          "repeat": function () {return this.results},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$item.count)+'x'}
              }
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.diceImgs[this.$item.dice-1]}
              },
              "classList": [
                "dice-small"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "ctrls"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "change"
          ],
          "events": {
            "click": "changeDices"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "help"
          ],
          "events": {
            "click": "clickHelp"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _source = __webpack_require__(/*! ../source.js */ "./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/source.js");

var rule = {
  supportDiceNumbers: [5, 6, 7, 8, 9, 4, 3, 2, 1],
  close: false,
  closeTime: 0.25,
  range: 3,
  max: 6,
  minCount: 5
};
var _default = {
  "public": {
    played: false,
    index: 0,
    supportDiceNumbers: rule.supportDiceNumbers,
    button: _source.button,
    dices: [],
    results: [],
    diceImgs: [_source.dice1, _source.dice2, _source.dice3, _source.dice4, _source.dice5, _source.dice6],
    diceConfig: _source.diceConfig
  },
  computed: {
    points: function points() {
      var res = this.dices.reduce(function (pre, cur) {
        return pre + cur;
      }, 0);
      return res;
    },
    lessThenMin: function lessThenMin() {
      return this.diceCount < rule.minCount;
    },
    diceCount: {
      get: function get() {
        return this.supportDiceNumbers[this.index];
      }
    },
    diceStyles: function diceStyles() {
      var diceConfig = this.diceConfig[this.diceCount],
          width = diceConfig.w,
          los = diceConfig.los,
          results = [];
      los.forEach(function (lo, index) {
        results.push("left: ".concat(width * lo.l / 2, "px;top: ").concat(width * lo.t / 2, "px;"));
      });
      return results;
    }
  },
  onReady: function onReady() {
    this.initDices();
    this.listenShake();
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '君子九个骰，小人瑟瑟抖。'
    };
  },
  changePicker: function changePicker(e) {
    var index = Number(e.detail.value);
    this.index = index;
    this.initDices();
    this.results = [];
    this.played = false;
  },
  initDices: function initDices() {
    var dices = [];

    for (var i = 0; i < this.diceCount; i++) {
      dices.push(6);
    }

    this.dices = dices;
  },
  listenShake: function listenShake() {},
  changeDices: function changeDices() {
    if (rule.close) {
      return;
    }

    this.played = true;
    var newDices = [];

    for (var i = 0; i < this.diceCount; i++) {
      newDices.push(Math.floor(Math.random() * rule.max) + 1);
    }

    this.dices = newDices;

    if (this.lessThenMin) {
      return;
    }

    this.handleDices(newDices);
    rule.close = true;
    return setTimeout(function () {
      return rule.close = false;
    }, rule.closeTime * 1000);
  },
  handleDices: function handleDices(newDices) {
    var newResults = [];

    if (Array.from(new Set(newDices)).length === this.diceCount) {
      newResults.push('顺子, 全部为 0 个');
    } else {
      var countOne = 0;

      for (var i = 0; i < rule.max; i++) {
        var j = i + 1,
            countJ = this.howManyCount(j),
            diceCount = this.diceCount;
        countJ = countJ === diceCount ? diceCount + 1 : countJ + countOne;
        newResults.push({
          count: countJ,
          dice: j
        });

        if (j === 1) {
          countOne = countJ;
        }
      }
    }

    this.results = newResults;
  },
  howManyCount: function howManyCount(point) {
    var count = 0,
        dices = this.dices;

    for (var i = 0; i < dices.length; i++) {
      var item = dices[i];

      if (item === point) {
        count++;
      }
    }

    return count;
  },
  clickHelp: function clickHelp() {}
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),

/***/ "./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux":
/*!***************************************************************************!*\
  !*** /Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../index.ux */ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/less-loader!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!../index.ux */ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/less-loader/dist/cjs.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../index.ux */ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerName:'fa-toolkit', packagerVersion: '2.2.0-Stable.301'})

/***/ }),

/***/ "./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/source.js":
/*!****************************************************************************!*\
  !*** /Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/source.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diceConfig = exports.sound = exports.dice6 = exports.dice5 = exports.dice4 = exports.dice3 = exports.dice2 = exports.dice1 = void 0;
var dice1 = '/assets/1.png';
exports.dice1 = dice1;
var dice2 = '/assets/2.png';
exports.dice2 = dice2;
var dice3 = '/assets/3.png';
exports.dice3 = dice3;
var dice4 = '/assets/4.png';
exports.dice4 = dice4;
var dice5 = '/assets/5.png';
exports.dice5 = dice5;
var dice6 = '/assets/6.png';
exports.dice6 = dice6;
var sound = '/assets/sound.mp3';
exports.sound = sound;
var unit = 1.5;
var dUnit = unit * 2;
var diceConfig = {
  1: {
    w: 100,
    los: [{
      l: unit,
      t: unit
    }]
  },
  2: {
    w: 100,
    los: [{
      l: 0,
      t: unit
    }, {
      l: dUnit,
      t: unit
    }]
  },
  3: {
    w: 100,
    los: [{
      l: 0,
      t: unit
    }, {
      l: unit,
      t: unit
    }, {
      l: dUnit,
      t: unit
    }]
  },
  4: {
    w: 100,
    los: [{
      l: 0,
      t: 0
    }, {
      l: dUnit,
      t: 0
    }, {
      l: 0,
      t: dUnit
    }, {
      l: dUnit,
      t: dUnit
    }]
  },
  5: {
    w: 100,
    los: [{
      l: 0,
      t: 0
    }, {
      l: dUnit,
      t: 0
    }, {
      l: unit,
      t: unit
    }, {
      l: 0,
      t: dUnit
    }, {
      l: dUnit,
      t: dUnit
    }]
  },
  6: {
    w: 100,
    los: [{
      l: 0,
      t: 0
    }, {
      l: dUnit,
      t: 0
    }, {
      l: 0,
      t: unit
    }, {
      l: dUnit,
      t: unit
    }, {
      l: 0,
      t: dUnit
    }, {
      l: dUnit,
      t: dUnit
    }]
  },
  7: {
    w: 100,
    los: [{
      l: 0,
      t: 0
    }, {
      l: dUnit,
      t: 0
    }, {
      l: 0,
      t: unit
    }, {
      l: dUnit,
      t: unit
    }, {
      l: 0,
      t: dUnit
    }, {
      l: dUnit,
      t: dUnit
    }, {
      l: unit,
      t: unit
    }]
  },
  8: {
    w: 100,
    los: [{
      l: 0,
      t: 0
    }, {
      l: dUnit,
      t: 0
    }, {
      l: 0,
      t: unit
    }, {
      l: dUnit,
      t: unit
    }, {
      l: 0,
      t: dUnit
    }, {
      l: dUnit,
      t: dUnit
    }, {
      l: unit,
      t: .5
    }, {
      l: unit,
      t: 2.5
    }]
  },
  9: {
    w: 100,
    los: [{
      l: 0,
      t: 0
    }, {
      l: dUnit,
      t: 0
    }, {
      l: 0,
      t: unit
    }, {
      l: dUnit,
      t: unit
    }, {
      l: 0,
      t: dUnit
    }, {
      l: dUnit,
      t: dUnit
    }, {
      l: unit,
      t: 0
    }, {
      l: unit,
      t: unit
    }, {
      l: unit,
      t: dUnit
    }]
  } //   10: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
  //   11: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
  //   12: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
  //   13: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
  //   14: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
  //   15: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
  //   16: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},

};
exports.diceConfig = diceConfig;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvSW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXg/NjE2MyIsIndlYnBhY2s6Ly8vL1VzZXJzL3p3ZWl6aGFvL3Byb2plY3RzL2h3X3F1aWNrL2RpY2UuaG1zLmt2a2VyL3NyYy9JbmRleC9pbmRleC51eD9mMDdhIiwid2VicGFjazovLy8vVXNlcnMvendlaXpoYW8vcHJvamVjdHMvaHdfcXVpY2svZGljZS5obXMua3ZrZXIvc3JjL0luZGV4L2luZGV4LnV4P2E5ODAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvc291cmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vVXNlcnMvendlaXpoYW8vcHJvamVjdHMvaHdfcXVpY2svZGljZS5obXMua3ZrZXIvc3JjL0luZGV4L2luZGV4LnV4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuY3RybHNcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLnBpY2tlci1kaWNlLW51bWJlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJkYXNoZWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2Q4ZDhkOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkOGQ4ZDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2Q4ZDhkOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2Q4ZDhkOFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLnBpY2stcmVtaW5kXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIixcbiAgICBcInRvcFwiOiBcIi04MHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIwMHB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwiLmNoYW5nZVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI0NDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDZweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZjOWQ1ZFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMycHhcIlxuICB9LFxuICBcIi5kaWNlc1wiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwid2lkdGhcIjogXCI0MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAwcHhcIlxuICB9LFxuICBcIi5kaWNlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcIi5kaWNlLWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJvYmplY3RGaXRcIjogXCJjb3ZlclwiXG4gIH0sXG4gIFwiLmRpMFwiOiB7XG4gICAgXCJ0b3BcIjogXCIxMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmRpMVwiOiB7XG4gICAgXCJ0b3BcIjogXCIxMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmRpMlwiOiB7XG4gICAgXCJ0b3BcIjogXCIxMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmRpM1wiOiB7XG4gICAgXCJ0b3BcIjogXCIxMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmRpNFwiOiB7XG4gICAgXCJ0b3BcIjogXCIxMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLnJlc3VsdHNcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLnN0cmFpZ2h0XCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0OHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwYWFcIlxuICB9LFxuICBcIi5yZXN1bHRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTIlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiLmRpY2Utc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwid2lkdGhcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuaGVscFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI4MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYzlkNWRcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGljZUltZ3NbdGhpcy4kaXRlbS0xXX1cbiAgICAgIH0sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGljZXN9LFxuICAgICAgXCJzdHlsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGljZVN0eWxlc1t0aGlzLiRpZHhdfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydkaWNlLWltYWdlJywgJ2RpJyt0aGlzLiRpZHhdfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZXNzVGhlbk1pbiYmdGhpcy5wbGF5ZWR9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJlc3VsdHNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMucG9pbnRzKSsn54K5J31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3RyYWlnaHRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yZXN1bHRzLmxlbmd0aD09PTF9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJlc3VsdHNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi6aG65a2QLCDlhajpg6ggMCDkuKpcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzdHJhaWdodFwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhKHRoaXMucmVzdWx0cy5sZW5ndGg9PT0xKX0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmVzdWx0c1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0aWRcIjogXCJkaWNlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVzdWx0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yZXN1bHRzfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kaXRlbS5jb3VudCkrJ3gnfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kaWNlSW1nc1t0aGlzLiRpdGVtLmRpY2UtMV19XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRpY2Utc21hbGxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjdHJsc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjaGFuZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImNoYW5nZURpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJoZWxwXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja0hlbHBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3NvdXJjZSA9IHJlcXVpcmUoXCIuL3NvdXJjZS5qc1wiKTtcblxudmFyIHJ1bGUgPSB7XG4gIHN1cHBvcnREaWNlTnVtYmVyczogWzUsIDYsIDcsIDgsIDksIDQsIDMsIDIsIDFdLFxuICBjbG9zZTogZmFsc2UsXG4gIGNsb3NlVGltZTogMC4yNSxcbiAgcmFuZ2U6IDMsXG4gIG1heDogNixcbiAgbWluQ291bnQ6IDVcbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIFwicHVibGljXCI6IHtcbiAgICBwbGF5ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiAwLFxuICAgIHN1cHBvcnREaWNlTnVtYmVyczogcnVsZS5zdXBwb3J0RGljZU51bWJlcnMsXG4gICAgYnV0dG9uOiBfc291cmNlLmJ1dHRvbixcbiAgICBkaWNlczogW10sXG4gICAgcmVzdWx0czogW10sXG4gICAgZGljZUltZ3M6IFtfc291cmNlLmRpY2UxLCBfc291cmNlLmRpY2UyLCBfc291cmNlLmRpY2UzLCBfc291cmNlLmRpY2U0LCBfc291cmNlLmRpY2U1LCBfc291cmNlLmRpY2U2XSxcbiAgICBkaWNlQ29uZmlnOiBfc291cmNlLmRpY2VDb25maWdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwb2ludHM6IGZ1bmN0aW9uIHBvaW50cygpIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLmRpY2VzLnJlZHVjZShmdW5jdGlvbiAocHJlLCBjdXIpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LFxuICAgIGxlc3NUaGVuTWluOiBmdW5jdGlvbiBsZXNzVGhlbk1pbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpY2VDb3VudCA8IHJ1bGUubWluQ291bnQ7XG4gICAgfSxcbiAgICBkaWNlQ291bnQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdXBwb3J0RGljZU51bWJlcnNbdGhpcy5pbmRleF07XG4gICAgICB9XG4gICAgfSxcbiAgICBkaWNlU3R5bGVzOiBmdW5jdGlvbiBkaWNlU3R5bGVzKCkge1xuICAgICAgdmFyIGRpY2VDb25maWcgPSB0aGlzLmRpY2VDb25maWdbdGhpcy5kaWNlQ291bnRdLFxuICAgICAgICAgIHdpZHRoID0gZGljZUNvbmZpZy53LFxuICAgICAgICAgIGxvcyA9IGRpY2VDb25maWcubG9zLFxuICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGxvcy5mb3JFYWNoKGZ1bmN0aW9uIChsbywgaW5kZXgpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFwibGVmdDogXCIuY29uY2F0KHdpZHRoICogbG8ubCAvIDIsIFwicHg7dG9wOiBcIikuY29uY2F0KHdpZHRoICogbG8udCAvIDIsIFwicHg7XCIpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9LFxuICBvblJlYWR5OiBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIHRoaXMuaW5pdERpY2VzKCk7XG4gICAgdGhpcy5saXN0ZW5TaGFrZSgpO1xuICB9LFxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCb5a2Q5Lmd5Liq6aqw77yM5bCP5Lq655Gf55Gf5oqW44CCJ1xuICAgIH07XG4gIH0sXG4gIGNoYW5nZVBpY2tlcjogZnVuY3Rpb24gY2hhbmdlUGlja2VyKGUpIHtcbiAgICB2YXIgaW5kZXggPSBOdW1iZXIoZS5kZXRhaWwudmFsdWUpO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmluaXREaWNlcygpO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMucGxheWVkID0gZmFsc2U7XG4gIH0sXG4gIGluaXREaWNlczogZnVuY3Rpb24gaW5pdERpY2VzKCkge1xuICAgIHZhciBkaWNlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRpY2VDb3VudDsgaSsrKSB7XG4gICAgICBkaWNlcy5wdXNoKDYpO1xuICAgIH1cblxuICAgIHRoaXMuZGljZXMgPSBkaWNlcztcbiAgfSxcbiAgbGlzdGVuU2hha2U6IGZ1bmN0aW9uIGxpc3RlblNoYWtlKCkge30sXG4gIGNoYW5nZURpY2VzOiBmdW5jdGlvbiBjaGFuZ2VEaWNlcygpIHtcbiAgICBpZiAocnVsZS5jbG9zZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGxheWVkID0gdHJ1ZTtcbiAgICB2YXIgbmV3RGljZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kaWNlQ291bnQ7IGkrKykge1xuICAgICAgbmV3RGljZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBydWxlLm1heCkgKyAxKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpY2VzID0gbmV3RGljZXM7XG5cbiAgICBpZiAodGhpcy5sZXNzVGhlbk1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlRGljZXMobmV3RGljZXMpO1xuICAgIHJ1bGUuY2xvc2UgPSB0cnVlO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBydWxlLmNsb3NlID0gZmFsc2U7XG4gICAgfSwgcnVsZS5jbG9zZVRpbWUgKiAxMDAwKTtcbiAgfSxcbiAgaGFuZGxlRGljZXM6IGZ1bmN0aW9uIGhhbmRsZURpY2VzKG5ld0RpY2VzKSB7XG4gICAgdmFyIG5ld1Jlc3VsdHMgPSBbXTtcblxuICAgIGlmIChBcnJheS5mcm9tKG5ldyBTZXQobmV3RGljZXMpKS5sZW5ndGggPT09IHRoaXMuZGljZUNvdW50KSB7XG4gICAgICBuZXdSZXN1bHRzLnB1c2goJ+mhuuWtkCwg5YWo6YOo5Li6IDAg5LiqJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb3VudE9uZSA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZS5tYXg7IGkrKykge1xuICAgICAgICB2YXIgaiA9IGkgKyAxLFxuICAgICAgICAgICAgY291bnRKID0gdGhpcy5ob3dNYW55Q291bnQoaiksXG4gICAgICAgICAgICBkaWNlQ291bnQgPSB0aGlzLmRpY2VDb3VudDtcbiAgICAgICAgY291bnRKID0gY291bnRKID09PSBkaWNlQ291bnQgPyBkaWNlQ291bnQgKyAxIDogY291bnRKICsgY291bnRPbmU7XG4gICAgICAgIG5ld1Jlc3VsdHMucHVzaCh7XG4gICAgICAgICAgY291bnQ6IGNvdW50SixcbiAgICAgICAgICBkaWNlOiBqXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChqID09PSAxKSB7XG4gICAgICAgICAgY291bnRPbmUgPSBjb3VudEo7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc3VsdHMgPSBuZXdSZXN1bHRzO1xuICB9LFxuICBob3dNYW55Q291bnQ6IGZ1bmN0aW9uIGhvd01hbnlDb3VudChwb2ludCkge1xuICAgIHZhciBjb3VudCA9IDAsXG4gICAgICAgIGRpY2VzID0gdGhpcy5kaWNlcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGljZXNbaV07XG5cbiAgICAgIGlmIChpdGVtID09PSBwb2ludCkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfSxcbiAgY2xpY2tIZWxwOiBmdW5jdGlvbiBjbGlja0hlbHAoKSB7fVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0h1YXdlaSBRdWlja0FwcCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvendlaXpoYW8vcHJvamVjdHMvaHdfcXVpY2svZGljZS5obXMua3ZrZXIvc3JjL0luZGV4L2luZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvQGJhYmVsL3ByZXNldC1lbnYmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL0h1YXdlaSBRdWlja0FwcCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4yLjAtU3RhYmxlLjMwMSd9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kaWNlQ29uZmlnID0gZXhwb3J0cy5zb3VuZCA9IGV4cG9ydHMuZGljZTYgPSBleHBvcnRzLmRpY2U1ID0gZXhwb3J0cy5kaWNlNCA9IGV4cG9ydHMuZGljZTMgPSBleHBvcnRzLmRpY2UyID0gZXhwb3J0cy5kaWNlMSA9IHZvaWQgMDtcbnZhciBkaWNlMSA9ICcvYXNzZXRzLzEucG5nJztcbmV4cG9ydHMuZGljZTEgPSBkaWNlMTtcbnZhciBkaWNlMiA9ICcvYXNzZXRzLzIucG5nJztcbmV4cG9ydHMuZGljZTIgPSBkaWNlMjtcbnZhciBkaWNlMyA9ICcvYXNzZXRzLzMucG5nJztcbmV4cG9ydHMuZGljZTMgPSBkaWNlMztcbnZhciBkaWNlNCA9ICcvYXNzZXRzLzQucG5nJztcbmV4cG9ydHMuZGljZTQgPSBkaWNlNDtcbnZhciBkaWNlNSA9ICcvYXNzZXRzLzUucG5nJztcbmV4cG9ydHMuZGljZTUgPSBkaWNlNTtcbnZhciBkaWNlNiA9ICcvYXNzZXRzLzYucG5nJztcbmV4cG9ydHMuZGljZTYgPSBkaWNlNjtcbnZhciBzb3VuZCA9ICcvYXNzZXRzL3NvdW5kLm1wMyc7XG5leHBvcnRzLnNvdW5kID0gc291bmQ7XG52YXIgdW5pdCA9IDEuNTtcbnZhciBkVW5pdCA9IHVuaXQgKiAyO1xudmFyIGRpY2VDb25maWcgPSB7XG4gIDE6IHtcbiAgICB3OiAxMDAsXG4gICAgbG9zOiBbe1xuICAgICAgbDogdW5pdCxcbiAgICAgIHQ6IHVuaXRcbiAgICB9XVxuICB9LFxuICAyOiB7XG4gICAgdzogMTAwLFxuICAgIGxvczogW3tcbiAgICAgIGw6IDAsXG4gICAgICB0OiB1bml0XG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiB1bml0XG4gICAgfV1cbiAgfSxcbiAgMzoge1xuICAgIHc6IDEwMCxcbiAgICBsb3M6IFt7XG4gICAgICBsOiAwLFxuICAgICAgdDogdW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IHVuaXQsXG4gICAgICB0OiB1bml0XG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiB1bml0XG4gICAgfV1cbiAgfSxcbiAgNDoge1xuICAgIHc6IDEwMCxcbiAgICBsb3M6IFt7XG4gICAgICBsOiAwLFxuICAgICAgdDogMFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogMFxuICAgIH0sIHtcbiAgICAgIGw6IDAsXG4gICAgICB0OiBkVW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogZFVuaXRcbiAgICB9XVxuICB9LFxuICA1OiB7XG4gICAgdzogMTAwLFxuICAgIGxvczogW3tcbiAgICAgIGw6IDAsXG4gICAgICB0OiAwXG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiAwXG4gICAgfSwge1xuICAgICAgbDogdW5pdCxcbiAgICAgIHQ6IHVuaXRcbiAgICB9LCB7XG4gICAgICBsOiAwLFxuICAgICAgdDogZFVuaXRcbiAgICB9LCB7XG4gICAgICBsOiBkVW5pdCxcbiAgICAgIHQ6IGRVbml0XG4gICAgfV1cbiAgfSxcbiAgNjoge1xuICAgIHc6IDEwMCxcbiAgICBsb3M6IFt7XG4gICAgICBsOiAwLFxuICAgICAgdDogMFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogMFxuICAgIH0sIHtcbiAgICAgIGw6IDAsXG4gICAgICB0OiB1bml0XG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiB1bml0XG4gICAgfSwge1xuICAgICAgbDogMCxcbiAgICAgIHQ6IGRVbml0XG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiBkVW5pdFxuICAgIH1dXG4gIH0sXG4gIDc6IHtcbiAgICB3OiAxMDAsXG4gICAgbG9zOiBbe1xuICAgICAgbDogMCxcbiAgICAgIHQ6IDBcbiAgICB9LCB7XG4gICAgICBsOiBkVW5pdCxcbiAgICAgIHQ6IDBcbiAgICB9LCB7XG4gICAgICBsOiAwLFxuICAgICAgdDogdW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogdW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IDAsXG4gICAgICB0OiBkVW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogZFVuaXRcbiAgICB9LCB7XG4gICAgICBsOiB1bml0LFxuICAgICAgdDogdW5pdFxuICAgIH1dXG4gIH0sXG4gIDg6IHtcbiAgICB3OiAxMDAsXG4gICAgbG9zOiBbe1xuICAgICAgbDogMCxcbiAgICAgIHQ6IDBcbiAgICB9LCB7XG4gICAgICBsOiBkVW5pdCxcbiAgICAgIHQ6IDBcbiAgICB9LCB7XG4gICAgICBsOiAwLFxuICAgICAgdDogdW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogdW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IDAsXG4gICAgICB0OiBkVW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogZFVuaXRcbiAgICB9LCB7XG4gICAgICBsOiB1bml0LFxuICAgICAgdDogLjVcbiAgICB9LCB7XG4gICAgICBsOiB1bml0LFxuICAgICAgdDogMi41XG4gICAgfV1cbiAgfSxcbiAgOToge1xuICAgIHc6IDEwMCxcbiAgICBsb3M6IFt7XG4gICAgICBsOiAwLFxuICAgICAgdDogMFxuICAgIH0sIHtcbiAgICAgIGw6IGRVbml0LFxuICAgICAgdDogMFxuICAgIH0sIHtcbiAgICAgIGw6IDAsXG4gICAgICB0OiB1bml0XG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiB1bml0XG4gICAgfSwge1xuICAgICAgbDogMCxcbiAgICAgIHQ6IGRVbml0XG4gICAgfSwge1xuICAgICAgbDogZFVuaXQsXG4gICAgICB0OiBkVW5pdFxuICAgIH0sIHtcbiAgICAgIGw6IHVuaXQsXG4gICAgICB0OiAwXG4gICAgfSwge1xuICAgICAgbDogdW5pdCxcbiAgICAgIHQ6IHVuaXRcbiAgICB9LCB7XG4gICAgICBsOiB1bml0LFxuICAgICAgdDogZFVuaXRcbiAgICB9XVxuICB9IC8vICAgMTA6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG4gIC8vICAgMTE6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG4gIC8vICAgMTI6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG4gIC8vICAgMTM6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG4gIC8vICAgMTQ6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG4gIC8vICAgMTU6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG4gIC8vICAgMTY6IHt3OiAxMDAsIGxvczogW3tsOiAwLCB0OiAwfSwge2w6IGRVbml0LCB0OiAwfSwge2w6IHVuaXQsIHQ6IHVuaXR9LCB7bDogMCwgdDogZFVuaXR9LCB7bDogZFVuaXQsIHQ6IGRVbml0fSwgXX0sXG5cbn07XG5leHBvcnRzLmRpY2VDb25maWcgPSBkaWNlQ29uZmlnOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=