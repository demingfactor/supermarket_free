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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_stylesheets_identity_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_stylesheets_identity_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_stylesheets_identity_css__);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleParseError: Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 182.99 236.32\"><defs><style>.cls-1{isolation:isolate;}.cls-2{mix-blend-mode:multiply;}.cls-3{fill:#00838a;}.cls-4{fill:#8dd4ab;}.cls-5{fill:#72855c;}.cls-6{fill:none;stroke:#72855c;stroke-miterlimit:10;}</style></defs><title>Asset 12</title><g class=\"cls-1\"><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><g class=\"cls-2\"><path class=\"cls-3\" d=\"M88.75,235.59c-17.76-3.53-31.09-8.55-42.59-15C32.54,213.05,23.71,204.31,17,194.3,8.78,181.91,1.35,169.92.23,157.65c-1.62-17.73,5.88-32.36,9.31-39.08,7.3-14.33,18.64-44.55,24.88-58,11.42-24.7,16.48-31.22,30-48.8,2.73-3.53,5.15-6.91,9.38-8.33C79.12,1.61,85.06,0,91.43,0,105.08.07,116,7.44,126.08,18.46c8.36,9.15,18.21,19.53,24.67,32.71,5.87,12,7.39,26.51,12.11,39.31,5,13.51,12.68,25.66,16.84,37.41,4.69,13.22,4,27.54.19,40.28-3.75,12.56-11.9,24.12-20.86,34.28S139.27,222,128,227.8C114.67,234.66,100.39,237.89,88.75,235.59Z\"/></g><path class=\"cls-4\" d=\"M96.18,230.32c-13.11,1.81-26.75.48-39-5.51-11.65-5.72-22.65-14.6-31.49-24.56C16.6,190,10.13,177.49,6.09,165.71a48.53,48.53,0,0,1,2.22-37.86c5.77-12,11.49-27.36,18.85-42.44,6.94-14.22,12.12-29.8,18.93-42.49C56.69,23.19,67,7.49,72.72,4.37c6.54-3.59,10.39-1.21,20,1.78,14.84,5.49,24.34,15.13,29.84,30.37,4.31,11.95,7.38,26.43,12.33,42.2,4,12.72,6.65,27.31,14.35,41.4,8.39,15.33,12.87,31.08,10.07,45.67-3,15.7-13.85,29.23-24,40.55C123.32,219.63,109,228.56,96.18,230.32Z\"/><path class=\"cls-5\" d=\"M102,147.64c0,20.82-9.87,43.86-29.83,43.86S37.5,168.86,37.5,148c0-10.19.44-22.29,7.6-31,7.47-9.1,18.79-12.32,29-12.32C94.05,104.72,102,126.81,102,147.64Z\"/><path class=\"cls-6\" d=\"M133,32.83c1.55,6,2.48,11.36,5.62,11\"/><path class=\"cls-6\" d=\"M142.11,52.88c-2.54-1-4-1.49-3.57,2.44\"/><path class=\"cls-6\" d=\"M142.84,62.39c4.14,0,6.95.26,6.17,3.41\"/><path class=\"cls-6\" d=\"M136.43,64.81c.45,5.2.72,9.09,4.26,8.7\"/><path class=\"cls-6\" d=\"M146.22,75.86c3.68-.45,6.63-.86,5.84,2.68\"/><path class=\"cls-6\" d=\"M133.69,49.24c-2.19,2.93-3.9,4.7-.36,6.27\"/><path class=\"cls-6\" d=\"M122.44,22.43c.63,3.48.56,4.39,4.09,5.17\"/><path class=\"cls-6\" d=\"M154.24,89.49c3.77,1.94,5.52,3.36,3.95,6.5\"/><path class=\"cls-6\" d=\"M129.43,35.44c-1.8,2.41-2.55,3-.19,5.33\"/><path class=\"cls-6\" d=\"M147.57,93.13c3.12,5.31,5.06,8.49,4.21,11.24\"/><path class=\"cls-6\" d=\"M139.31,86.12c2.53-.6,3.57-.94,5.14-.1\"/><path class=\"cls-6\" d=\"M164.44,105.77c-2.76.83-3.94,1.21-3.94,3.76\"/><path class=\"cls-6\" d=\"M152.33,110.66c3.9,2.56,6.69,5.06,4.49,8\"/><path class=\"cls-6\" d=\"M168,118.24c3.1.5,4.79.91,4.59,3.46\"/><path class=\"cls-6\" d=\"M164.63,123.14c-3.73,2.65-4.88,3.07-2.13,7.79\"/><path class=\"cls-6\" d=\"M170.27,129.08c3.19.76,5.19,1,2.63,4.55\"/><path class=\"cls-6\" d=\"M165.5,138.45c-2.66,2.27-3.41,3.37-2.62,5.92\"/><path class=\"cls-6\" d=\"M172,154.57c2.2-3.52,3.61-6,1.49-7.76\"/><path class=\"cls-6\" d=\"M166,152.07c-3.42,4.22-5.41,5.67-2.41,10\"/><path class=\"cls-6\" d=\"M173.9,161.51c2.34,3.92,2.81,5.89-.17,8.25\"/><path class=\"cls-6\" d=\"M163.48,170.36c1.29-4.22,1.69-7.58,4.25-6\"/><path class=\"cls-6\" d=\"M164,177.49c3.13-1,5.52-1.77,5.52,1.57\"/><path class=\"cls-6\" d=\"M155.85,186.67c-1-3.89-1.23-7.23,1-7.42\"/><path class=\"cls-6\" d=\"M163.46,185.45c2.59,4.14,3.9,7.14-.54,8.52\"/><path class=\"cls-6\" d=\"M154,194c-3.35.83-2.78,1.05-3.74,5.38\"/><path class=\"cls-6\" d=\"M136.9,212.65c2.62-.62,4-.74,3.43-3.1\"/><path class=\"cls-6\" d=\"M146.11,204.87c2-.93,3.65-2,3.68-.27\"/><path class=\"cls-6\" d=\"M155.65,199.4c-1.69-1.32-2-1.69.77-3.65\"/><path class=\"cls-6\" d=\"M134,215.51c-3.14.2-2.87.35-4.35,4.08\"/></g></g></g></svg>\n    at doBuild (/Users/igbinosaogbeide/projects/Web/development/supermarket_free/node_modules/webpack/lib/NormalModule.js:303:19)\n    at runLoaders (/Users/igbinosaogbeide/projects/Web/development/supermarket_free/node_modules/webpack/lib/NormalModule.js:209:11)\n    at /Users/igbinosaogbeide/projects/Web/development/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:370:3\n    at iterateNormalLoaders (/Users/igbinosaogbeide/projects/Web/development/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:211:10)\n    at /Users/igbinosaogbeide/projects/Web/development/supermarket_free/node_modules/loader-runner/lib/LoaderRunner.js:202:4\n    at /Users/igbinosaogbeide/projects/Web/development/supermarket_free/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);
//# sourceMappingURL=main.71be44a5.js.map