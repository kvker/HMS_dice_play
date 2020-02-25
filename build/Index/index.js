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

/***/ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".doc-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".web-page": {
    "width": "100%",
    "height": "100%"
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
  "children": [
    {
      "type": "web",
      "attr": {
        "src": function () {return this.loadUrl},
        "trustedurl": function () {return this.list},
        "id": "web",
        "allowthirdpartycookies": function () {return this.allowThirdPartyCookies}
      },
      "events": {
        "pagestart": "onPageStart",
        "message": "onMessage",
        "titlereceive": "onTitleReceive",
        "error": "onError"
      },
      "id": "web"
    }
  ]
}

/***/ }),

/***/ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!/Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['websrc'],
  data: {
    title: "",
    loadUrl: "https://mobile-1251835910.cos-website.ap-chengdu.myqcloud.com/dice_play/",
    allowThirdPartyCookies: true,
    list: ["new RegExp('https?.*')"]
  },
  onPageStart: function onPageStart(e) {
    console.info('pagestart: ' + e.url);
  },
  onTitleReceive: function onTitleReceive(e) {
    this.title = e.title;
  },
  onError: function onError(e) {
    console.info('pageError : ' + e.errorMsg);
  },
  onMessage: function onMessage(e) {
    console.info('onmessage e = ' + e.message + ", url = " + e.url);
  },
  onShow: function onShow() {
    console.info(" onshow");
  },
  onHide: function onHide() {
    console.info("  onHide");
  },
  onBackPress: function onBackPress() {
    console.log('onBackPress');
    this.$element('web').canBack({
      callback: function (e) {
        if (e) {
          console.log('web back');
          this.$element('web').back();
        } else {
          console.log('router back');

          _system["default"].back();
        }
      }.bind(this)
    });
    return true;
  }
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
var $app_style$ = __webpack_require__(/*! !../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!../../../../../../../Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!../index.ux */ "./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Applications/Huawei QuickApp IDE.app/Contents/Resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux!./Users/zweizhao/projects/hw_quick/dice.hms.kvker/src/Index/index.ux")
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvSW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXg/ZmRiMiIsIndlYnBhY2s6Ly8vL1VzZXJzL3p3ZWl6aGFvL3Byb2plY3RzL2h3X3F1aWNrL2RpY2UuaG1zLmt2a2VyL3NyYy9JbmRleC9pbmRleC51eD9mMDdhIiwid2VicGFjazovLy8vVXNlcnMvendlaXpoYW8vcHJvamVjdHMvaHdfcXVpY2svZGljZS5obXMua3ZrZXIvc3JjL0luZGV4L2luZGV4LnV4P2E5ODAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXhcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZG9jLXBhZ2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLndlYi1wYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid2ViXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubG9hZFVybH0sXG4gICAgICAgIFwidHJ1c3RlZHVybFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgIFwiaWRcIjogXCJ3ZWJcIixcbiAgICAgICAgXCJhbGxvd3RoaXJkcGFydHljb29raWVzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hbGxvd1RoaXJkUGFydHlDb29raWVzfVxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJwYWdlc3RhcnRcIjogXCJvblBhZ2VTdGFydFwiLFxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJvbk1lc3NhZ2VcIixcbiAgICAgICAgXCJ0aXRsZXJlY2VpdmVcIjogXCJvblRpdGxlUmVjZWl2ZVwiLFxuICAgICAgICBcImVycm9yXCI6IFwib25FcnJvclwiXG4gICAgICB9LFxuICAgICAgXCJpZFwiOiBcIndlYlwiXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHByb3BzOiBbJ3dlYnNyYyddLFxuICBkYXRhOiB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgbG9hZFVybDogXCJodHRwczovL21vYmlsZS0xMjUxODM1OTEwLmNvcy13ZWJzaXRlLmFwLWNoZW5nZHUubXlxY2xvdWQuY29tL2RpY2VfcGxheS9cIixcbiAgICBhbGxvd1RoaXJkUGFydHlDb29raWVzOiB0cnVlLFxuICAgIGxpc3Q6IFtcIm5ldyBSZWdFeHAoJ2h0dHBzPy4qJylcIl1cbiAgfSxcbiAgb25QYWdlU3RhcnQ6IGZ1bmN0aW9uIG9uUGFnZVN0YXJ0KGUpIHtcbiAgICBjb25zb2xlLmluZm8oJ3BhZ2VzdGFydDogJyArIGUudXJsKTtcbiAgfSxcbiAgb25UaXRsZVJlY2VpdmU6IGZ1bmN0aW9uIG9uVGl0bGVSZWNlaXZlKGUpIHtcbiAgICB0aGlzLnRpdGxlID0gZS50aXRsZTtcbiAgfSxcbiAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihlKSB7XG4gICAgY29uc29sZS5pbmZvKCdwYWdlRXJyb3IgOiAnICsgZS5lcnJvck1zZyk7XG4gIH0sXG4gIG9uTWVzc2FnZTogZnVuY3Rpb24gb25NZXNzYWdlKGUpIHtcbiAgICBjb25zb2xlLmluZm8oJ29ubWVzc2FnZSBlID0gJyArIGUubWVzc2FnZSArIFwiLCB1cmwgPSBcIiArIGUudXJsKTtcbiAgfSxcbiAgb25TaG93OiBmdW5jdGlvbiBvblNob3coKSB7XG4gICAgY29uc29sZS5pbmZvKFwiIG9uc2hvd1wiKTtcbiAgfSxcbiAgb25IaWRlOiBmdW5jdGlvbiBvbkhpZGUoKSB7XG4gICAgY29uc29sZS5pbmZvKFwiICBvbkhpZGVcIik7XG4gIH0sXG4gIG9uQmFja1ByZXNzOiBmdW5jdGlvbiBvbkJhY2tQcmVzcygpIHtcbiAgICBjb25zb2xlLmxvZygnb25CYWNrUHJlc3MnKTtcbiAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5jYW5CYWNrKHtcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWIgYmFjaycpO1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLmJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncm91dGVyIGJhY2snKTtcblxuICAgICAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0h1YXdlaSBRdWlja0FwcCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0h1YXdlaSBRdWlja0FwcCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3p3ZWl6aGFvL3Byb2plY3RzL2h3X3F1aWNrL2RpY2UuaG1zLmt2a2VyL3NyYy9JbmRleC9pbmRleC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy96d2Vpemhhby9wcm9qZWN0cy9od19xdWljay9kaWNlLmhtcy5rdmtlci9zcmMvSW5kZXgvaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvQGJhYmVsL3ByZXNldC1lbnYmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL0h1YXdlaSBRdWlja0FwcCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy9IdWF3ZWkgUXVpY2tBcHAgSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSHVhd2VpIFF1aWNrQXBwIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4yLjAtU3RhYmxlLjMwMSd9KSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=