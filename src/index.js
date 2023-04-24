export {Ship, Gameboard, Player}

const Ship = (length, hits = 0, sunk = false) => {
    const hit = function() {
        this.hits ++;
        this.isSunk();
    }
    const isSunk = function() {
        if(this.length == this.hits) {
            this.sunk = true;
        }
        return this.sunk;
    }
    return {length, hits, sunk, hit, isSunk}
}

const Gameboard = () => {
    const board = [ [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null], ]
    const place = function(x, y, ship) {
        this.board[x][y] = ship
    }
    const receiveAttack = function(x, y) {
        if(this.board[x][y] != null) {
            this.board[x][y].hit();
        }
        else {
            this.board[x][y] = 'X';
        }
    }
    const allSunk = function() {
        let allsunk = true;
        for(let i=0; i<this.board.length; i++){
            for(let j=0; j<this.board[i].length; j++){
                if(board[i][j] != null && board[i][j].sunk == false){
                    allsunk = false;
                }
            }
        }
        return allsunk;
    }
    return {board, place, receiveAttack, allSunk}
}

const Player = (name) => {
    const attack = function(x, y, gameboard) {
        gameboard.receiveAttack(x, y);
    }
    return {attack, name}
}

function createBoards(pb, cb) {
    let playerGrid = document.querySelector('.player-board');
    for(let i=0; i<pb.board.length; i++){
        for(let j=0; j<pb.board[i].length; j++){
            let cell = document.createElement('div');
            cell.className = 'pcell';
            cell.id = `${i}${j}`;
            playerGrid.appendChild(cell);
        }
    }

    let computerGrid = document.querySelector('.computer-board');
    for(let i=0; i<cb.board.length; i++){
        for(let j=0; j<cb.board[i].length; j++){
            let cell = document.createElement('div');
            cell.className = 'ccell';
            cell.id = `${i}${j}`;
            computerGrid.appendChild(cell);
        }
    }
}

function placeShips(pb, cb) {
    pb.place(1,1,ship1pa);
    pb.place(0,3,ship1pb);
    pb.place(9,8,ship1pc);
    pb.place(6,7,ship1pd);
    pb.place(8,5,ship2pa);
    pb.place(8,6,ship2pa);
    pb.place(3,3,ship2pb);
    pb.place(3,4,ship2pb);
    pb.place(6,2,ship2pc);
    pb.place(7,2,ship2pc);
    pb.place(0,7,ship3pa);
    pb.place(0,8,ship3pa);
    pb.place(0,9,ship3pa);
    pb.place(9,0,ship3pb);
    pb.place(9,1,ship3pb);
    pb.place(9,2,ship3pb);
    pb.place(2,9,ship4pa);
    pb.place(3,9,ship4pa);
    pb.place(4,9,ship4pa);
    pb.place(5,9,ship4pa);
    

    cb.place(0,0,ship1ca);
    cb.place(1,3,ship1cb);
    cb.place(9,8,ship1cc);
    cb.place(6,7,ship1cd);
    cb.place(8,5,ship2ca);
    cb.place(8,6,ship2ca);
    cb.place(3,3,ship2cb);
    cb.place(3,4,ship2cb);
    cb.place(6,4,ship2cc);
    cb.place(6,5,ship2cc);
    cb.place(0,7,ship3ca);
    cb.place(0,8,ship3ca);
    cb.place(0,9,ship3ca);
    cb.place(9,0,ship3cb);
    cb.place(9,1,ship3cb);
    cb.place(9,2,ship3cb);
    cb.place(3,0,ship4ca);
    cb.place(4,0,ship4ca);
    cb.place(5,0,ship4ca);
    cb.place(6,0,ship4ca);
}

function colorCell(){
    const playercells = document.querySelectorAll('.pcell');
    playercells.forEach((cell) => {
        for(let i=0; i<playerBoard.board.length; i++){
            for(let j=0; j<playerBoard.board[i].length; j++){
                if(cell.id == `${i}${j}` && playerBoard.board[i][j] != null) {
                    cell.style.backgroundColor = 'red';
                }
            }
        }
    })

    const computercells = document.querySelectorAll('.ccell');
    computercells.forEach((cell) => {
        for(let i=0; i<computerBoard.board.length; i++){
            for(let j=0; j<computerBoard.board[i].length; j++){
                if(cell.id == `${i}${j}` && computerBoard.board[i][j] != null) {
                    //cell.style.backgroundColor = 'blue';
                }
            }
        }
    })
}

function clickCell(active, domCell, board, x, y) {
    active.attack(x, y, board);
    if(board.board[x][y] == 'X') {
        domCell.textContent = 'X';
        domCell.style.pointerEvents = 'none';

        gameController.switchPlayerTurn();
        if(gameController.getActivePlayer().name == 'computer') {
            computerMove();
        }
    }
    else{
        if(gameController.getActivePlayer().name == 'computer') {
            computerMove();
        }
        domCell.style.backgroundColor = 'grey';
        domCell.style.pointerEvents = 'none';
    }
    checkSunk();
    checkWin(board, active);
}

function checkSunk() {
    const computercells = document.querySelectorAll('.ccell');
    computercells.forEach((cell) => {
        for(let i=0; i<computerBoard.board.length; i++){
            for(let j=0; j<computerBoard.board[i].length; j++){
                if(cell.id == `${i}${j}` && computerBoard.board[i][j] != null &&
                   computerBoard.board[i][j].sunk == true) {
                    cell.style.backgroundColor = 'black';
                }
            }
        }
    })

    const playercells = document.querySelectorAll('.pcell');
    playercells.forEach((cell) => {
        for(let i=0; i<playerBoard.board.length; i++){
            for(let j=0; j<playerBoard.board[i].length; j++){
                if(cell.id == `${i}${j}` && playerBoard.board[i][j] != null &&
                   playerBoard.board[i][j].sunk == true) {
                    cell.style.backgroundColor = 'black';
                }
            }
        }
    })
}

function checkWin(board, active) {
    const winnerDiv = document.querySelector('.winner');
    if(board.allSunk() == true) {
        if(active.name == 'player') {
            winnerDiv.textContent = 'YOU WON!'
        }
        else{
            winnerDiv.textContent = 'COMPUTER WON!'
        }
    }
}

let array = [];
function computerMove() {
    let xy = generateUniqueRandom();
    let x = xy.slice(0, 1);
    let y = xy.slice(1);

    const playercells = document.querySelectorAll('.pcell');
    let domCell;
    playercells.forEach((cell) => {
        for(let i=0; i<playerBoard.board.length; i++){
            for(let j=0; j<playerBoard.board[i].length; j++){
                if(cell.id == `${x}${y}`) {
                   domCell = cell;
                }
            }
        }
    })
    clickCell(computer, domCell, playerBoard, x, y)
}

function generateUniqueRandom() {
    let x = Math.floor(Math.random() * (9 - 0 + 1) + 0)
    let y = Math.floor(Math.random() * (9 - 0 + 1) + 0)
    let xy = ''+x+y;

    if(!array.includes(xy)) {
        array.push(xy);
        return xy;
    } else {
        return generateUniqueRandom();
    }
}

const player = Player('player');
const computer = Player('computer');

const playerBoard = Gameboard();
const computerBoard = Gameboard();

const ship1pa = Ship(1);
const ship1pb = Ship(1);
const ship1pc = Ship(1);
const ship1pd = Ship(1);
const ship2pa = Ship(2);
const ship2pb = Ship(2);
const ship2pc = Ship(2);
const ship3pa = Ship(3);
const ship3pb = Ship(3);
const ship4pa = Ship(4);

const ship1ca = Ship(1);
const ship1cb = Ship(1);
const ship1cc = Ship(1);
const ship1cd = Ship(1);
const ship2ca = Ship(2);
const ship2cb = Ship(2);
const ship2cc = Ship(2);
const ship3ca = Ship(3);
const ship3cb = Ship(3);
const ship4ca = Ship(4);

const gameController = (() => {
    createBoards(playerBoard, computerBoard);
    placeShips(playerBoard, computerBoard);

    colorCell();

    const computercells = document.querySelectorAll('.ccell');
    computercells.forEach((cell) => {
        cell.addEventListener('click', () => {
            for(let i=0; i<computerBoard.board.length; i++){
                for(let j=0; j<computerBoard.board[i].length; j++){
                    if(cell.id == `${i}${j}`) {
                        clickCell(player, cell, computerBoard, i, j);
                    }
                }
            }
        })
    })

    let activePlayer = player;
    const getActivePlayer = () => activePlayer;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player ? computer : player;
    };

    return {getActivePlayer, switchPlayerTurn};
})();

