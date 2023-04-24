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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n\n\nconst Ship = (length, hits = 0, sunk = false) => {\n    const hit = function() {\n        this.hits ++;\n        this.isSunk();\n    }\n    const isSunk = function() {\n        if(this.length == this.hits) {\n            this.sunk = true;\n        }\n        return this.sunk;\n    }\n    return {length, hits, sunk, hit, isSunk}\n}\n\nconst Gameboard = () => {\n    const board = [ [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null],\n                    [null, null, null, null, null, null, null, null, null, null], ]\n    const place = function(x, y, ship) {\n        this.board[x][y] = ship\n    }\n    const receiveAttack = function(x, y) {\n        if(this.board[x][y] != null) {\n            board[x][y].hit();\n        }\n        else {\n            board[x][y] = 'X';\n        }\n    }\n    const allSunk = function() {\n        let allsunk = true;\n        for(let i=0; i<this.board.length; i++){\n            for(let j=0; j<this.board[i].length; j++){\n                if(board[i][j] != null && board[i][j].sunk == false){\n                    allsunk = false;\n                }\n            }\n        }\n        return allsunk;\n    }\n    return {board, place, receiveAttack, allSunk}\n}\n\nconst Player = (name) => {\n    const attack = function(x, y, gameboard) {\n        gameboard.receiveAttack(x, y);\n    }\n    return {attack, name}\n}\n\nfunction createBoards(pb, cb) {\n    let playerGrid = document.querySelector('.player-board');\n    for(let i=0; i<pb.board.length; i++){\n        for(let j=0; j<pb.board[i].length; j++){\n            let cell = document.createElement('div');\n            cell.className = 'pcell';\n            cell.id = `${i}${j}`;\n            playerGrid.appendChild(cell);\n        }\n    }\n\n    let computerGrid = document.querySelector('.computer-board');\n    for(let i=0; i<cb.board.length; i++){\n        for(let j=0; j<cb.board[i].length; j++){\n            let cell = document.createElement('div');\n            cell.className = 'ccell';\n            cell.id = `${i}${j}`;\n            computerGrid.appendChild(cell);\n        }\n    }\n}\n\nfunction placeShips(pb, cb) {\n    pb.place(1,1,ship1pa);\n    pb.place(0,3,ship1pb);\n    pb.place(9,8,ship1pc);\n    pb.place(6,7,ship1pd);\n    pb.place(8,5,ship2pa);\n    pb.place(8,6,ship2pa);\n    pb.place(3,3,ship2pb);\n    pb.place(3,4,ship2pb);\n    pb.place(6,2,ship2pc);\n    pb.place(7,2,ship2pc);\n    pb.place(0,7,ship3pa);\n    pb.place(0,8,ship3pa);\n    pb.place(0,9,ship3pa);\n    pb.place(9,0,ship3pb);\n    pb.place(9,1,ship3pb);\n    pb.place(9,2,ship3pb);\n    pb.place(2,9,ship4pa);\n    pb.place(3,9,ship4pa);\n    pb.place(4,9,ship4pa);\n    pb.place(5,9,ship4pa);\n    \n\n    cb.place(0,0,ship1ca);\n    cb.place(1,3,ship1cb);\n    cb.place(9,8,ship1cc);\n    cb.place(6,7,ship1cd);\n    cb.place(8,5,ship2ca);\n    cb.place(8,6,ship2ca);\n    cb.place(3,3,ship2cb);\n    cb.place(3,4,ship2cb);\n    cb.place(6,4,ship2cc);\n    cb.place(6,5,ship2cc);\n    cb.place(0,7,ship3ca);\n    cb.place(0,8,ship3ca);\n    cb.place(0,9,ship3ca);\n    cb.place(9,0,ship3cb);\n    cb.place(9,1,ship3cb);\n    cb.place(9,2,ship3cb);\n    cb.place(3,0,ship4ca);\n    cb.place(4,0,ship4ca);\n    cb.place(5,0,ship4ca);\n    cb.place(6,0,ship4ca);\n}\n\nfunction colorCell(){\n    const playercells = document.querySelectorAll('.pcell');\n    playercells.forEach((cell) => {\n        for(let i=0; i<playerBoard.board.length; i++){\n            for(let j=0; j<playerBoard.board[i].length; j++){\n                if(cell.id == `${i}${j}` && playerBoard.board[i][j] != null) {\n                    cell.style.backgroundColor = 'red';\n                }\n            }\n        }\n    })\n\n    const computercells = document.querySelectorAll('.ccell');\n    computercells.forEach((cell) => {\n        for(let i=0; i<computerBoard.board.length; i++){\n            for(let j=0; j<computerBoard.board[i].length; j++){\n                if(cell.id == `${i}${j}` && computerBoard.board[i][j] != null) {\n                    cell.style.backgroundColor = 'blue';\n                }\n            }\n        }\n    })\n}\n\nfunction clickCell(active, domCell, board, x, y) {\n    active.attack(x, y, board);\n    if(board.board[x][y] == 'X') {\n        domCell.textContent = 'X';\n\n        gameController.switchPlayerTurn();\n        if(gameController.getActivePlayer().name == 'computer') {\n            let x = Math.floor(Math.random() * (9 - 0 + 1) + 0)\n            let y = Math.floor(Math.random() * (9 - 0 + 1) + 0)\n\n            const playercells = document.querySelectorAll('.pcell');\n            playercells.forEach((cell) => {\n                for(let i=0; i<playerBoard.board.length; i++){\n                    for(let j=0; j<playerBoard.board[i].length; j++){\n                        if(cell.id == `${x}${y}`) {\n                            domCell = cell;\n                        }\n                    }\n                }\n            })\n            clickCell(computer, domCell, playerBoard, x, y)\n        }\n    }\n    else{\n        domCell.style.backgroundColor = 'lightBlue';\n        domCell.style.pointerEvents = 'none';\n    }\n    checkSunk();\n    checkWin(board);\n}\n\nfunction checkSunk() {\n    const computercells = document.querySelectorAll('.ccell');\n    computercells.forEach((cell) => {\n        for(let i=0; i<computerBoard.board.length; i++){\n            for(let j=0; j<computerBoard.board[i].length; j++){\n                if(cell.id == `${i}${j}` && computerBoard.board[i][j] != null &&\n                   computerBoard.board[i][j].sunk == true) {\n                    cell.style.backgroundColor = 'black';\n                }\n            }\n        }\n    })\n\n    const playercells = document.querySelectorAll('.pcell');\n    playercells.forEach((cell) => {\n        for(let i=0; i<playerBoard.board.length; i++){\n            for(let j=0; j<playerBoard.board[i].length; j++){\n                if(cell.id == `${i}${j}` && playerBoard.board[i][j] != null &&\n                   playerBoard.board[i][j].sunk == true) {\n                    cell.style.backgroundColor = 'black';\n                }\n            }\n        }\n    })\n}\n\nfunction checkWin(board) {\n    const winnerDiv = document.querySelector('.winner');\n    if(board.allSunk() == true) {\n        winnerDiv.textContent = 'PLAYER WON';\n    }\n}\n\nconst player = Player('player');\nconst computer = Player('computer');\n\nconst playerBoard = Gameboard();\nconst computerBoard = Gameboard();\n\nconst ship1pa = Ship(1);\nconst ship1pb = Ship(1);\nconst ship1pc = Ship(1);\nconst ship1pd = Ship(1);\nconst ship2pa = Ship(2);\nconst ship2pb = Ship(2);\nconst ship2pc = Ship(2);\nconst ship3pa = Ship(3);\nconst ship3pb = Ship(3);\nconst ship4pa = Ship(4);\n\nconst ship1ca = Ship(1);\nconst ship1cb = Ship(1);\nconst ship1cc = Ship(1);\nconst ship1cd = Ship(1);\nconst ship2ca = Ship(2);\nconst ship2cb = Ship(2);\nconst ship2cc = Ship(2);\nconst ship3ca = Ship(3);\nconst ship3cb = Ship(3);\nconst ship4ca = Ship(4);\n\nconst gameController = (() => {\n    createBoards(playerBoard, computerBoard);\n    placeShips(playerBoard, computerBoard);\n\n    colorCell();\n\n    const computercells = document.querySelectorAll('.ccell');\n    computercells.forEach((cell) => {\n        cell.addEventListener('click', () => {\n            for(let i=0; i<computerBoard.board.length; i++){\n                for(let j=0; j<computerBoard.board[i].length; j++){\n                    if(cell.id == `${i}${j}`) {\n                        clickCell(player, cell, computerBoard, i, j);\n                    }\n                }\n            }\n        })\n    })\n\n    let activePlayer = player;\n    const getActivePlayer = () => activePlayer;\n\n    const switchPlayerTurn = () => {\n        activePlayer = activePlayer === player ? computer : player;\n    };\n\n    const playRound = () => {\n        switchPlayerTurn();\n    };\n\n    return {playRound, getActivePlayer, checkWin, switchPlayerTurn};\n})();\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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