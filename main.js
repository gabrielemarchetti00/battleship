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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n\n\nconst Ship = (length, hits = 0, sunk = false) => {\n    const hit = function() {\n        this.hits ++;\n        this.isSunk();\n    }\n    const isSunk = function() {\n        if(this.length == this.hits) {\n            this.sunk = true;\n        }\n    }\n    return {length, hits, sunk, hit, isSunk}\n}\n\nconst Gameboard = () => {\n    const board = [ [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null], ]\n    const place = function(x, y, ship) {\n        this.board[x][y] = ship\n    }\n    const receiveAttack = function(x, y) {\n        if(this.board[x][y] != null) {\n            board[x][y].hit();\n        }\n        else {\n            board[x][y] = 'X';\n        }\n    }\n    const allSunk = function() {\n        let allsunk = true;\n        for(let i=0; i<this.board.length; i++){\n            for(let j=0; j<this.board[i].length; j++){\n                if(board[i][j] != null && board[i][j].sunk == false){\n                    allsunk = false;\n                }\n            }\n        }\n        return allsunk;\n    }\n    return {board, place, receiveAttack, allSunk}\n}\n\nconst Player = () => {\n    const attack = function(x, y, gameboard) {\n        gameboard.receiveAttack(x, y);\n    }\n    return {attack}\n}\n\nconst gameController = (() => {\n    const player = Player();\n    const computer = Player();\n\n    const playerBoard = Gameboard();\n    let playerGrid = document.querySelector('.player-board');\n    for(let i=0; i<playerBoard.board.length; i++){\n        for(let j=0; j<playerBoard.board[i].length; j++){\n            let cell = document.createElement('div');\n            cell.id = `${i}${j}`;\n            playerGrid.appendChild(cell);\n        }\n    }\n\n    const computerBoard = Gameboard();\n    let computerGrid = document.querySelector('.computer-board');\n    for(let i=0; i<computerBoard.board.length; i++){\n        for(let j=0; j<computerBoard.board[i].length; j++){\n            let cell = document.createElement('div');\n            cell.id = `${i}${j}`;\n            computerGrid.appendChild(cell);\n        }\n    }\n\n    let activePlayer = player;\n    const getActivePlayer = () => activePlayer;\n\n    const switchPlayerTurn = () => {\n        activePlayer = activePlayer === player ? computer : player;\n    };\n\n    const playRound = () => {\n        switchPlayerTurn();\n    };\n\n    let winner;\n    const checkWin = () => {\n    }\n\n    return {playRound, getActivePlayer, checkWin};\n})();\n\nconst displayController = (() => {\n    const updateScreen = () => {\n        const activePlayer = gameController.getActivePlayer();\n    }\n\n    function clickHandlerBoard(){\n        updateScreen();\n    };\n\n    return{updateScreen}\n})();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;