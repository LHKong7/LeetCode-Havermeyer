/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const row = matrix.length, col = matrix[0].length;
    let res = new Array(col).fill(0).map(() => new Array(row).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            res[j][i] = matrix[i][j];
        }
    }

    return res;
};

/*
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引
 * 
 * 当矩阵 行数 === 列数， 交换行坐标与列坐标
 */
