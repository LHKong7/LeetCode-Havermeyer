/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const m = matrix.length;
    if (m === 0) return 0;
    const n = matrix[0].length;

    let left = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === '1') left[row][col] = (col === 0 ? 0 : left[row][col-1]) + 1;
        }
    }
    let res = 0;
    for (let col = 0; col < n; col++) {
        let up = new Array(m).fill(0);
        let down = new Array(m).fill(m);
        let monoStk = [];

        for (let row = 0; row < m; row++) {
            while (monoStk.length && left[row][col] <= left[monoStk[monoStk.length - 1]][col]) {
                down[monoStk[monoStk.length - 1]] = row;
                monoStk.pop();
            }

            up[row] = (monoStk.length===0 ? -1 : monoStk[monoStk.length - 1]);
            monoStk.push(row);
        }

        for (let row = 0; row < m; row++) {
            let height = left[row][col];
            let width = down[row] - up[row] - 1;

            res = Math.max(res, height * width);
        }
    }

    return res;
};
