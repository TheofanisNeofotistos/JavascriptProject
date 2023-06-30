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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(ele) {\n    this.ele = ele;\n    this.handleClick = this.handleClick.bind(this);\n    this.setDeck();\n    this.setDiscard();\n    this.playerHand();\n    this.diceTray();\n  }\n  setUpBoard() {\n    let row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n    const grid = document.createElement('ul');\n    grid.classList.add('zones');\n    for (let row = 0; row < 3; row++) {\n      const zone = document.createElement('li');\n      zone.classList.add(\"zone\");\n      zone.dataset.row = row;\n      grid.appendChild(zone);\n    }\n    this.ele.appendChild(grid);\n    grid.addEventListener('click', this.handleClick);\n  }\n  setDeck(deck) {\n    const playerDeck = document.createElement('li');\n    playerDeck.id = \"playerDeck\";\n    playerDeck.classList.add('myDeck');\n    for (let deck = 0; deck < 1; deck++) {\n      playerDeck.dataset.deck = deck;\n    }\n    this.ele.appendChild(playerDeck);\n  }\n  setDiscard() {\n    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    // debugger\n    const playerDiscard = document.createElement('li');\n    playerDiscard.classList.add('myDiscard');\n    playerDiscard.id = \"playerDiscard\";\n    // const discard = []\n\n    // discard.push([])\n\n    this.ele.appendChild(playerDiscard);\n  }\n  playerHand() {\n    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    const playerHand = document.createElement('li');\n    playerHand.classList.add('myHand');\n    playerHand.id = \"playerHand\";\n    this.ele.appendChild(playerHand);\n    playerHand.addEventListener(\"click\", this.grabCard);\n  }\n  diceTray() {\n    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    const diceTray = document.createElement('li');\n    diceTray.classList.add('myDice');\n    diceTray.id = \"diceTray\";\n    this.ele.appendChild(diceTray);\n  }\n  grabCard(e) {\n    e.preventDefault();\n    let card = e.target;\n  }\n  handleClick(e) {\n    e.preventDefault();\n    let zone = e.target;\n    this.makeMove(zone);\n  }\n  makeMove(zone) {\n    let row = zone.dataset.row;\n    let pos = [row];\n\n    // this.game.playMove(pos)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZSl7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlIFxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2V0RGVjaygpXG4gICAgICAgIHRoaXMuc2V0RGlzY2FyZCgpXG4gICAgICAgIHRoaXMucGxheWVySGFuZCgpXG4gICAgICAgIHRoaXMuZGljZVRyYXkoKVxuICAgIH1cblxuXG4gICAgc2V0VXBCb2FyZChyb3c9Myl7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnem9uZXMnKVxuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMCA7IHJvdyA8IDMgOyByb3crKyl7XG4gICAgICAgICAgICBjb25zdCB6b25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgem9uZS5jbGFzc0xpc3QuYWRkKFwiem9uZVwiKVxuXG4gICAgICAgICAgICB6b25lLmRhdGFzZXQucm93ID0gcm93XG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHpvbmUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChncmlkKVxuICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLmhhbmRsZUNsaWNrKVxuICAgIH1cblxuICAgIHNldERlY2soZGVjayl7XG4gICAgICAgIGNvbnN0IHBsYXllckRlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIHBsYXllckRlY2suaWQgPVwicGxheWVyRGVja1wiXG4gICAgICAgIHBsYXllckRlY2suY2xhc3NMaXN0LmFkZCgnbXlEZWNrJylcbiAgICAgICAgZm9yKGxldCBkZWNrID0gMCA7IGRlY2sgPCAxIDsgZGVjaysrKXtcblxuICAgICAgICAgICAgcGxheWVyRGVjay5kYXRhc2V0LmRlY2sgPSBkZWNrXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKHBsYXllckRlY2spXG4gICAgfVxuXG4gICAgc2V0RGlzY2FyZChuPTEpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjb25zdCBwbGF5ZXJEaXNjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBwbGF5ZXJEaXNjYXJkLmNsYXNzTGlzdC5hZGQoJ215RGlzY2FyZCcpXG5cbiAgICAgICAgcGxheWVyRGlzY2FyZC5pZCA9XCJwbGF5ZXJEaXNjYXJkXCJcbiAgICAgICAgLy8gY29uc3QgZGlzY2FyZCA9IFtdXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2NhcmQucHVzaChbXSlcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5lbGUuYXBwZW5kQ2hpbGQocGxheWVyRGlzY2FyZClcbiAgICB9XG5cbiAgICBwbGF5ZXJIYW5kKG49MSl7XG4gICAgICAgIGNvbnN0IHBsYXllckhhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIHBsYXllckhhbmQuY2xhc3NMaXN0LmFkZCgnbXlIYW5kJylcblxuICAgICAgICBwbGF5ZXJIYW5kLmlkID1cInBsYXllckhhbmRcIlxuICAgICAgICBcbiAgICAgICAgdGhpcy5lbGUuYXBwZW5kQ2hpbGQocGxheWVySGFuZClcbiAgICAgICAgXG5cbiAgICAgICAgcGxheWVySGFuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmdyYWJDYXJkKVxuICAgIH1cblxuICAgIGRpY2VUcmF5KG49MSl7XG4gICAgICAgIGNvbnN0IGRpY2VUcmF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBkaWNlVHJheS5jbGFzc0xpc3QuYWRkKCdteURpY2UnKVxuXG4gICAgICAgIGRpY2VUcmF5LmlkID1cImRpY2VUcmF5XCJcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKGRpY2VUcmF5KVxuICAgIH1cblxuICAgIGdyYWJDYXJkKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0IGNhcmQ9IGUudGFyZ2V0XG4gICAgfVxuXG4gICAgXG5cblxuICAgXG5cbiAgICBoYW5kbGVDbGljayhlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCB6b25lID0gZS50YXJnZXQgXG5cbiAgICAgICAgdGhpcy5tYWtlTW92ZSh6b25lKVxuICAgIH1cblxuICAgIG1ha2VNb3ZlKHpvbmUpe1xuICAgICAgICBsZXQgcm93ID0gem9uZS5kYXRhc2V0LnJvd1xuXG4gICAgICAgIGxldCBwb3MgPSBbcm93XVxuXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5wbGF5TW92ZShwb3MpXG4gICAgfVxuXG59XG5cbiJdLCJuYW1lcyI6WyJCb2FyZCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0RGVjayIsInNldERpc2NhcmQiLCJwbGF5ZXJIYW5kIiwiZGljZVRyYXkiLCJzZXRVcEJvYXJkIiwicm93IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZ3JpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInpvbmUiLCJkYXRhc2V0IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVjayIsInBsYXllckRlY2siLCJpZCIsIm4iLCJwbGF5ZXJEaXNjYXJkIiwiZ3JhYkNhcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjYXJkIiwidGFyZ2V0IiwibWFrZU1vdmUiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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