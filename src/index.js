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
            board[x][y].hit();
        }
        else {
            board[x][y] = 'X';
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

const Player = () => {
    const attack = function(x, y, gameboard) {
        gameboard.receiveAttack(x, y);
    }
    return {attack}
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
    const ship1p = Ship(1);
    const ship2p = Ship(2);
    pb.place(1,1,ship1p);
    pb.place(5,5,ship2p);
    pb.place(5,6,ship2p);

    const ship1c = Ship(1);
    const ship2c = Ship(2);
    cb.place(0,1,ship1c);
    cb.place(8,5,ship2c);
    cb.place(7,5,ship2c);
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
                    cell.style.backgroundColor = 'blue';
                }
            }
        }
    })
}


const playerBoard = Gameboard();
const computerBoard = Gameboard();


const displayController = (() => {
    const updateScreen = () => {
        colorCell();
    }

    function clickHandlerBoard(){
        gameController.playRound();
        updateScreen();
    };

    return{updateScreen}
})();

const gameController = (() => {
    const player = Player();
    const computer = Player();

    createBoards(playerBoard, computerBoard);
    placeShips(playerBoard, computerBoard);

    displayController.updateScreen();

    const computercells = document.querySelectorAll('.ccell');
    computercells.forEach((cell) => {
        cell.addEventListener('click', () => {
            for(let i=0; i<computerBoard.board.length; i++){
                for(let j=0; j<computerBoard.board[i].length; j++){
                    if(cell.id == `${i}${j}` && computerBoard.board[i][j] != null) {
                        cell.style.backgroundColor = 'lightBlue';
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

    const playRound = () => {
        console.log('cioa');
        switchPlayerTurn();
    };

    let winner;
    const checkWin = () => {
    }

    return {playRound, getActivePlayer, checkWin};
})();

