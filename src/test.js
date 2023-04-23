import {Ship, Gameboard, Player} from "./index"

test('ship objects creation', () => {
    const ship = Ship(3, 0, false)
    expect(ship).toMatchObject({length: 3, hits: 0, sunk: false});
})

test('hit function', () => {
    const ship = Ship(3)
    ship.hit();
    expect(ship.hits).toBe(1);
})

test('isSunk function', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(true);
})

test('place function', () => {
    const gameboard = Gameboard();
    const ship = Ship(1);
    gameboard.place(5,5,ship);
    expect(gameboard.board[5][5]).toBe(ship);
})

test('receive attack function (hit)', () => {
    const gameboard = Gameboard();
    const ship = Ship(1);
    gameboard.place(5,5,ship);
    gameboard.receiveAttack(5,5);
    expect(gameboard.board[5][5].hits).toBe(1);
})

test('receive attack function (miss)', () => {
    const gameboard = Gameboard();
    const ship = Ship(1);
    gameboard.place(5,5,ship);
    gameboard.receiveAttack(5,6);
    expect(gameboard.board[5][6]).toBe('X');
})

test('allsunk', () => {
    const gameboard = Gameboard();
    const ship1 = Ship(1);
    const ship2 = Ship(2);

    gameboard.place(5,5,ship1);
    gameboard.place(1,1,ship2);
    gameboard.place(1,2,ship2);

    gameboard.receiveAttack(5,5);
    gameboard.receiveAttack(1,1);
    gameboard.receiveAttack(1,2);

    expect(gameboard.allSunk()).toBe(true);
})

test('attack by player', () => {
    const gameboard = Gameboard();
    const player = Player();
    const ship1 = Ship(1);
    gameboard.place(1,1,ship1);

    player.attack(1,1,gameboard);
    expect(gameboard.board[1][1].hits).toBe(1);

})