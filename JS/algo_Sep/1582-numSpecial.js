/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    let res = 0;
    const numRow = mat.length, numCol = mat[0].length;

    const rowsSum = new Array(numRow).fill(0);
    const colsSum = new Array(numCol).fill(0);
    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            rowsSum[i] += mat[i][j];
            colsSum[j] += mat[i][j];
        }
    }

    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) res++;
        }
    }

    return res;
};
