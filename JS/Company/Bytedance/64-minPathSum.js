/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum_BackTracking = function(grid) {
    let minPathSum = Number.MAX_SAFE_INTEGER;
    const dirs = [[1, 0], [0, 1]];

    const dfs = (grid, row, col, sum) => {
        if (row === grid.length - 1 && col === grid[0].length - 1) {
            minPathSum = Math.min(minPathSum, sum);
            return;
        }

        for (let dir of dirs) {
            let nextRow = row + dir[0];
            let nextCol = col + dir[1];

            if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length) continue;
            sum += grid[nextRow][nextCol];
            dfs(grid, nextRow, nextCol, sum);
            sum -= grid[nextRow][nextCol];
        }
    }

    dfs(grid, 0, 0, grid[0][0]);
    return minPathSum;
};

var minPathSum_BackTracking_Two = function(grid) {
    const dirs = [[1, 0], [0, 1]];

    const dfs = (grid, row, col, sum) => {
        if (row === grid.length - 1 && col === grid[0].length - 1) {
            return grid[row][col]; // destination
        }

        let minPathSum = Number.MAX_SAFE_INTEGER;

        for (let dir of dirs) {
            let nextRow = row + dir[0];
            let nextCol = col + dir[1];

            if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length) continue;
            let childrenMinSum = dfs(grid, nextRow, nextCol, sum);
            minPathSum = Math.min(minPathSum, childrenMinSum);
        }

        return minPathSum + grid[row][col];
    }

    return dfs(grid, 0, 0, grid[0][0]);
};

var minPathSum_Memo = function(grid) {
    const dirs = [[1, 0], [0, 1]];
    const memo = new Array(grid.length).fill(Number.MAX_SAFE_INTEGER).map(() => (new Array(grid[0].length).fill(Number.MAX_SAFE_INTEGER)));

    const dfs = (grid, row, col, sum, memo) => {
        if (row === grid.length - 1 && col === grid[0].length - 1) {
            return grid[row][col]; // destination
        }
        if (memo[row][col] !== Number.MAX_SAFE_INTEGER) return memo[row][col];
        let minPathSum = Number.MAX_SAFE_INTEGER;

        for (let dir of dirs) {
            let nextRow = row + dir[0];
            let nextCol = col + dir[1];

            if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length) continue;
            let childrenMinSum = dfs(grid, nextRow, nextCol, sum, memo);
            minPathSum = Math.min(minPathSum, childrenMinSum);
        }

        memo[row][col] = minPathSum + grid[row][col];
        return  memo[row][col];
    }

    return dfs(grid, 0, 0, grid[0][0], memo);
};

var minPathSum_DP_BottomUP = function(grid) {
    let m = grid.length, n = grid[0].length;
    const dp = new Array(grid.length).fill(Number.MAX_SAFE_INTEGER).map(() => new Array(grid[0].length).fill(Number.MAX_SAFE_INTEGER));

    dp[m-1][n-1] = grid[m-1][n-1];

    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >= 0; j--) {
            if (i === m-1 && j !== n-1) { // last row
                dp[i][j] = grid[i][j] + dp[i][j+1];
            } else if (i !== m-1 && j === n-1) { // last col
                dp[i][j] = grid[i][j] + dp[i+1][j];
            } else if (i != m-1 && j != n-1) {
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j], dp[i][j+1]);
            }
        }
    }

    return dp[0][0];
};

var minPathSum_DP_TopDown = function(grid) {
    let m = grid.length, n = grid[0].length;
    const dp = new Array(grid.length).fill(Number.MAX_SAFE_INTEGER).map(() => new Array(grid[0].length).fill(Number.MAX_SAFE_INTEGER));

    dp[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j !== 0) { // row
                dp[i][j] = grid[i][j] + dp[i][j-1];
            } else if (i !== 0 && j === 0) { // col
                dp[i][j] = grid[i][j] + dp[i-1][j];
            } else if (i != 0 && j != 0) {
                dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    return dp[m-1][n-1];
};

var minPathSum_DP_TopDown_stateCompression = function(grid) {
    let m = grid.length, n = grid[0].length;
    const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j !== 0) { // row
                dp[j] = grid[i][j] + dp[j-1];
            } else if (i !== 0 && j === 0) { // col
                dp[j] = grid[i][j] + dp[j];
            } else if (i != 0 && j != 0) {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j-1]);
            }
        }
    }

    return dp[n-1];
};

var minPathSum_DP_TopDown_stateCompression_original = function(grid) {
    let m = grid.length, n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j !== 0) { // row
                grid[i][j] = grid[i][j] + grid[i][j-1];
            } else if (i !== 0 && j === 0) { // col
                grid[i][j] = grid[i][j] + grid[i-1][j];
            } else if (i != 0 && j != 0) {
                grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1]);
            }
        }
    }

    return grid[m-1][n-1];
};

const grid = [[1,3,1],[1,5,1],[4,2,1]];
let res = minPathSum_DP_TopDown_stateCompression_original(grid);
console.log(res);
