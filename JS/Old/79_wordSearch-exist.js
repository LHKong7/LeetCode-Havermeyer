/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const directions = [[-1,0], [1,0], [0, -1], [0,1]];
    const m = board.length, n = board[0].length;
    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));

    const dfs = (row, col, idx) => {
        if (board[row][col] !== word.charAt(idx)) return false;
        else if (idx === (word.length - 1)) return true;

        visited[row][col] = true;

        for (dir of directions) {
            let nextRow = row + dir[0];
            let nextCol = col + dir[1];
            if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol <= n && !visited[nextRow][nextCol]) {
                if (dfs(nextRow, nextCol, idx + 1)) return true;
            }
        }
        visited[row][col] = false;
        return false;
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === word.charAt(0)) {
                if (dfs(row, col, 0)) return true;
            }
        }
    }

    return false;
};
