/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // TRBL
    let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let numRow = grid.length, numCol = grid[0].length;
    let queue = [], hashStore = new Map();

    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (grid[i][j] === 2) {
                let code = i * numCol + j;
                queue.push(code);
                hashStore.set(code, 0);
            }
        }
    }

    let res = 0;
    while (queue.length) {
        let code = queue.shift();
        let row = Math.floor(code/numCol), col = Math.floor(code % numCol);

        for (let dir of dirs) {
            let nextRow = row + dir[0], nextCol = col + dir[1];

            if (0 <= nextRow && nextRow < numRow && 0 <= nextCol && nextCol < numCol && grid[nextRow][nextCol] === 1) {
                grid[nextRow][nextCol] = 2;
                let nexCode = nextRow * numCol + nextCol;
                queue.push(nexCode);
                hashStore.set(nexCode, hashStore.get(code)+1);
                res = hashStore.get(nexCode);
            }
        }
    }

    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (grid[i][j] === 1) return -1;
        }
    }

    return res;
};
