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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_stylesheets_layout_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_stylesheets_layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_stylesheets_layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_stylesheets_animations_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_stylesheets_animations_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_stylesheets_animations_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_stylesheets_functions_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_stylesheets_functions_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_stylesheets_functions_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_stylesheets_variables_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_stylesheets_variables_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_stylesheets_variables_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_stylesheets_identity_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_stylesheets_identity_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_stylesheets_identity_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_stylesheets_lighter_youtube_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_stylesheets_lighter_youtube_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_stylesheets_lighter_youtube_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_javascripts_lighter_youtube_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_javascripts_lighter_youtube_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_javascripts_lighter_youtube_js__);
__webpack_require__(1)









/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Syntax Error \n\n(70:1) Unexpected }\n\n \u001b[90m 68 | \u001b[39m    \u001b[33m}\u001b[39m\n \u001b[90m 69 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 70 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 71 | \u001b[39m\n\n    at runLoaders (/Users/richiekhoo/projects/supermarket_free/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/richiekhoo/projects/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/richiekhoo/projects/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/richiekhoo/projects/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/richiekhoo/projects/supermarket_free/node_modules/postcss-loader/lib/index.js:196:44)\n    at <anonymous>");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Syntax Error \n\n(42:1) Unexpected }\n\n \u001b[90m 40 | \u001b[39m  -webkit-clip-path\u001b[33m:\u001b[39m \u001b[36mpolygon\u001b[39m\u001b[36m(100% 0, 100% 95%, 0% 100%, 0 5%)\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 41 | \u001b[39m\u001b[33m}\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 42 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 43 | \u001b[39m\n \u001b[90m 44 | \u001b[39m\n\n    at runLoaders (/Users/richiekhoo/projects/supermarket_free/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/richiekhoo/projects/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/richiekhoo/projects/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/richiekhoo/projects/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/richiekhoo/projects/supermarket_free/node_modules/postcss-loader/lib/index.js:196:44)\n    at <anonymous>");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="./assets/images/video_cover.png">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.e68ad05c.js.map