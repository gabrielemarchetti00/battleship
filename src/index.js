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

const gameController = (() => {
    const player = Player();
    const computer = Player();

    const playerBoard = Gameboard();
    let playerGrid = document.querySelector('.player-board');
    for(let i=0; i<playerBoard.board.length; i++){
        for(let j=0; j<playerBoard.board[i].length; j++){
            let cell = document.createElement('div');
            cell.id = `${i}${j}`;
            playerGrid.appendChild(cell);
        }
    }

    const computerBoard = Gameboard();
    let computerGrid = document.querySelector('.computer-board');
    for(let i=0; i<computerBoard.board.length; i++){
        for(let j=0; j<computerBoard.board[i].length; j++){
            let cell = document.createElement('div');
            cell.id = `${i}${j}`;
            computerGrid.appendChild(cell);
        }
    }

    let activePlayer = player;
    const getActivePlayer = () => activePlayer;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player ? computer : player;
    };

    const playRound = () => {
        switchPlayerTurn();
    };

    let winner;
    const checkWin = () => {
    }

    return {playRound, getActivePlayer, checkWin};
})();

const displayController = (() => {
    const updateScreen = () => {
        const activePlayer = gameController.getActivePlayer();
    }

    function clickHandlerBoard(){
        updateScreen();
    };

    return{updateScreen}
})();