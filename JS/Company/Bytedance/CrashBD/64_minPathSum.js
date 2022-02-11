/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    dp[m-1][n-1] = grid[m-1][n-1];

    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >= 0; j--) {
            if (i === m-1 && j !== n-1) { // last row
                dp[i][j] = grid[i][j] + dp[i][j+1];
            } else if (i != m - 1 && j == n - 1) { // last col
                dp[i][j] = grid[i][j] + dp[i + 1][j];
            } else if (i != m - 1 && j != n - 1) {
                dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
};
