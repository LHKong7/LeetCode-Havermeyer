/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, bottom, left, top
    let m = matrix.length;
    let n = matrix[0].length;
    let row = 0, col = 0;
    let di = 0;
    let res = [];
    let seen = new Array(m).fill(false).map(() => new Array(n).fill(false));

    for (let i = 0; i < m * n; i++) {
        res.push(matrix[row][col]);
        seen[row][col] = true;

        let nextRow = row + directions[di][0];
        let nextCol = col + directions[di][1];

        if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || seen[nextRow][nextCol]) {
            di = (di + 1) % 4;
        }

        row = row + directions[di][0];
        col = col + directions[di][1];
    }

    return res;
};