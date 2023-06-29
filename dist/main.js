/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n// import Example from \"./scripts/example\";\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\")\n//     new Example(main)\n// })\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const container = document.getElementById(\"board\");\n  const newBoard = new _scripts_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container);\n  newBoard.setUpBoard(3);\n  const discard = document.getElementById(\"playerDiscard\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsTUFBTTtFQUMvQyxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUNsRCxNQUFNQyxRQUFRLEdBQUcsSUFBSUwsc0RBQUssQ0FBQ0csU0FBUyxDQUFDO0VBQ3JDRSxRQUFRLENBQUNDLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFFdEIsTUFBTUMsT0FBTyxHQUFHTixRQUFRLENBQUNHLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDNUQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3Jlc3RsaW5nY2FyZGdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKVxuLy8gfSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKVxuICAgIGNvbnN0IG5ld0JvYXJkID0gbmV3IEJvYXJkKGNvbnRhaW5lcilcbiAgICBuZXdCb2FyZC5zZXRVcEJvYXJkKDMpXG4gICAgXG4gICAgY29uc3QgZGlzY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyRGlzY2FyZFwiKVxufSkiXSwibmFtZXMiOlsiQm9hcmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsIm5ld0JvYXJkIiwic2V0VXBCb2FyZCIsImRpc2NhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(ele) {\n    this.ele = ele;\n    this.handleClick = this.handleClick.bind(this);\n    this.setDeck();\n    this.setDiscard();\n  }\n  setUpBoard() {\n    let row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n    const grid = document.createElement('ul');\n    grid.classList.add('zones');\n    for (let row = 0; row < 3; row++) {\n      const zone = document.createElement('li');\n      zone.classList.add(\"zone\");\n      zone.dataset.row = row;\n      grid.appendChild(zone);\n    }\n    this.ele.appendChild(grid);\n    grid.addEventListener('click', this.handleClick);\n  }\n  setDeck(deck) {\n    const playerDeck = document.createElement('li');\n    playerDeck.id = \"playerDeck\";\n    playerDeck.classList.add('myDeck');\n    for (let deck = 0; deck < 1; deck++) {\n      playerDeck.dataset.deck = deck;\n    }\n    this.ele.appendChild(playerDeck);\n  }\n  setDiscard() {\n    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    debugger;\n    const playerDiscard = document.createElement('li');\n    playerDiscard.classList.add('myDiscard');\n    playerDiscard.id = \"playerDiscard\";\n    // const discard = []\n\n    // discard.push([])\n\n    this.ele.appendChild(playerDiscard);\n  }\n  handleClick(e) {\n    e.preventDefault();\n    let zone = e.target;\n    this.makeMove(zone);\n  }\n  makeMove(zone) {\n    let row = zone.dataset.row;\n    let pos = [row];\n\n    // this.game.playMove(pos)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3Jlc3RsaW5nY2FyZGdhbWUvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZSl7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlIFxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2V0RGVjaygpXG4gICAgICAgIHRoaXMuc2V0RGlzY2FyZCgpXG4gICAgfVxuXG5cbiAgICBzZXRVcEJvYXJkKHJvdz0zKXtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd6b25lcycpXG5cbiAgICAgICAgZm9yKGxldCByb3cgPSAwIDsgcm93IDwgMyA7IHJvdysrKXtcbiAgICAgICAgICAgIGNvbnN0IHpvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICB6b25lLmNsYXNzTGlzdC5hZGQoXCJ6b25lXCIpXG5cbiAgICAgICAgICAgIHpvbmUuZGF0YXNldC5yb3cgPSByb3dcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoem9uZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKGdyaWQpXG4gICAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMuaGFuZGxlQ2xpY2spXG4gICAgfVxuXG4gICAgc2V0RGVjayhkZWNrKXtcbiAgICAgICAgY29uc3QgcGxheWVyRGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgcGxheWVyRGVjay5pZCA9XCJwbGF5ZXJEZWNrXCJcbiAgICAgICAgcGxheWVyRGVjay5jbGFzc0xpc3QuYWRkKCdteURlY2snKVxuICAgICAgICBmb3IobGV0IGRlY2sgPSAwIDsgZGVjayA8IDEgOyBkZWNrKyspe1xuXG4gICAgICAgICAgICBwbGF5ZXJEZWNrLmRhdGFzZXQuZGVjayA9IGRlY2tcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGUuYXBwZW5kQ2hpbGQocGxheWVyRGVjaylcbiAgICB9XG5cbiAgICBzZXREaXNjYXJkKG49MSl7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGNvbnN0IHBsYXllckRpc2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIHBsYXllckRpc2NhcmQuY2xhc3NMaXN0LmFkZCgnbXlEaXNjYXJkJylcblxuICAgICAgICBwbGF5ZXJEaXNjYXJkLmlkID1cInBsYXllckRpc2NhcmRcIlxuICAgICAgICAvLyBjb25zdCBkaXNjYXJkID0gW11cblxuICAgICAgICBcbiAgICAgICAgLy8gZGlzY2FyZC5wdXNoKFtdKVxuXG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChwbGF5ZXJEaXNjYXJkKVxuICAgIH1cblxuICAgIFxuXG5cbiAgIFxuXG4gICAgaGFuZGxlQ2xpY2soZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgem9uZSA9IGUudGFyZ2V0IFxuXG4gICAgICAgIHRoaXMubWFrZU1vdmUoem9uZSlcbiAgICB9XG5cbiAgICBtYWtlTW92ZSh6b25lKXtcbiAgICAgICAgbGV0IHJvdyA9IHpvbmUuZGF0YXNldC5yb3dcblxuICAgICAgICBsZXQgcG9zID0gW3Jvd11cblxuICAgICAgICAvLyB0aGlzLmdhbWUucGxheU1vdmUocG9zKVxuICAgIH1cblxufVxuXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImVsZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldERlY2siLCJzZXREaXNjYXJkIiwic2V0VXBCb2FyZCIsInJvdyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdyaWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ6b25lIiwiZGF0YXNldCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlY2siLCJwbGF5ZXJEZWNrIiwiaWQiLCJuIiwicGxheWVyRGlzY2FyZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1ha2VNb3ZlIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cmVzdGxpbmdjYXJkZ2FtZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;