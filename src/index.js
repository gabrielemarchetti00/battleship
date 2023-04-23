export { Ship }

const Ship = (length, hits, sunk) => {
    const hit = () => hits++
    const isSunk = (length, hits) => {
        if(length == hits) sunk = true
    }
    return {length, hits, sunk, hit, isSunk}
}