/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    if (!mat) return [];
    let numRow = mat.length, numCol = mat[0].length;
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // TRBL
    let res = new Array(numRow).fill(0).map(() => new Array(numCol).fill(0));
    let seen = new Array(numRow).fill(false).map(() => new Array(numCol).fill(false));
    let queue = [];

    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (mat[i][j] === 0) {
                seen[i][j] = true;
                queue.push([i, j]);
            }
        }
    }

    while (queue.length) {
        let ele = queue.shift();
        let row = ele[0], col = ele[1];
        for (let dir of dirs) {
            let nextRow = row + dir[0], nextCol = col + dir[1];
            if (nextRow >= 0 && nextRow < numRow && nextCol >= 0 && nextCol < numCol && !seen[nextRow][nextCol]) {
                res[nextRow][nextCol] = res[row][col] + 1;
                queue.push([nextRow, nextCol]);
                seen[nextRow][nextCol] = true;
            }
        }
    }

    return res;
};
