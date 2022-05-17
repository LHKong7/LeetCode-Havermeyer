/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
    let rowNum = mat.length;
    if (rowNum == 0) return [];
    let colNum = mat[0].length;

    const result = new Array(rowNum * colNum).fill(0)
    const dirs = [[-1, 1], [1, -1]]
    let row = 0, col = 0, d = 0;

    for (let i = 0; i < rowNum * colNum; i++) {
        result[i] = mat[row][col]
        row += dirs[d][0]
        col += dirs[d][1]

        if (row >= rowNum) {row = rowNum - 1; col += 2; d = 1 - d;}
        if (col >= colNum) {col = colNum - 1; row += 2; d = 1 - d;}
        if (row < 0) {row = 0; d = 1 - d;}
        if (col < 0) {col = 0; d = 1 - d;}
    }

    return result
};