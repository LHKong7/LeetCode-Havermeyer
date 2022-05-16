/*
 * 将下标的行坐标和列坐标进行计算
 * matrix[row][col] -> rotate 90 degree -> matrix[col][n-row-1]
 * matrix[col][n-row-1] -> rotate 90 degree -> matrix[n-row-1][n - col - 1]
 * matrix[n-row-1][n-col-1]  -> rotate 90 degree -> matrix[n-col-1][row]
 * matrix[n-row-1][n-col-1]  -> rotate 90 degree -> matrix[row][col]
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const n = matrix.length
    for (let row = 0; row < Math.floor(n / 2); row++) {
        for (let col = 0; col < Math.floor((n + 1) / 2); col++) {
            temp = matrix[row][col]
            matrix[row][col] = matrix[n - col - 1][row]
            matrix[n - col - 1][row] = matrix[n - row - 1][n - col - 1]
            matrix[n - row - 1][n - col - 1] = matrix[col][n - row - 1]
            matrix[col][n - row - 1] = temp
        }
    }
};

/*
 * 水平翻转： 通过水平线翻转 matrix[row][col] => matrix[n-row-1][col]
 *
 * 主对角线翻转 matrix[n-row-1] => matrix[col][n-row-1]
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    // 水平翻转
    for (let row = 0; row < Math.floor(n / 2); row++) {
        for (let col = 0; col < n; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[n - row - 1][col];
            matrix[n - row - 1][col] = temp;
        }
    }

    // 主对角线翻转
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < row; col++) { // achieve row is enough
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
};
