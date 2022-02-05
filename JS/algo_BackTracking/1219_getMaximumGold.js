/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let maxGold = Number.MIN_SAFE_INTEGER;
    const dirs = [[-1,0], [1,0], [0,1], [0, -1]]; // top, down, right, left
    let m = grid.length, n = grid[0].length;
    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));

    const dfs = (grid, row, col, dirs, currGold, visited) => {
        if (grid[row][col] === 0) {
            return;
        }

        visited[row][col] = true;
        let tempGold = currGold + grid[row][col];
        maxGold = Math.max(maxGold, tempGold);
        for (let dir of dirs) {
            let nextRow = row + dir[0];
            let nextCol = col + dir[1];

            if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n && !visited[nextRow][nextCol]) {
                dfs(grid, nextRow, nextCol, dirs, tempGold, visited);
            }
        }
        visited[row][col] = false;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                dfs(grid, i, j, dirs, 0, visited);
            }
        }
    }

    return maxGold === Number.MIN_SAFE_INTEGER ? 0 : maxGold;
};
