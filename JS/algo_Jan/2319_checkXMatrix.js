/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    const n = grid.length, m = grid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === j || (i + j) === (n - 1)) {
                if (grid[i][j] === 0) {
                    return false;
                }
            } else if (grid[i][j] !== 0) {
                return false;
            }
        }
    }

    return true;
};
