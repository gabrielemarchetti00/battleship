import { Ship } from "./index"

test('ship objects creation', () => {
    const ship = Ship(3, 0, false)
    expect(ship).toMatchObject({length: 3, hits: 0, sunk: false});
})

test('hit function', () => {
    const ship = Ship(3, 0, false)
    ship.hit();
    expect(ship.hits).toBe(1);
})