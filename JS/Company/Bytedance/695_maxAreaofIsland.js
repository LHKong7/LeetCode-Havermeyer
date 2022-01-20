/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let ans = 0;

    var inArea = (row, col) => {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    }

    var dfs = (row, col) => {
        if (!inArea(row, col) || grid[row][col] == 0 || visited[row][col]) {
            return 0;
        }

        visited[row][col] = true;
        let res = 0;
        for (let dir of directions) {
            let nextRow = row + dir[0];
            let nextCol = col + dir[1];
            res += dfs(nextRow, nextCol);
        }

        return 1 + res; // 1 means row and col Area, res means t,b,l,r Area
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 1 && !visited[row][col]) {
                let area = dfs(row, col);
                ans = Math.max(ans, area);
            }
        }
    }

    return ans;
};
