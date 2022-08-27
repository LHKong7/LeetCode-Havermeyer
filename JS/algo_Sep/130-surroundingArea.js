/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board) return;

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // top right bottom left
    let numRow = board.length, numCol = board[0].length;

    let queue = [];

    for (let i = 0; i < numRow; i++) {
        if (board[i][0] === 'O') {
            queue.push([i, 0]);
            board[i][0] = 'A';
        }

        if (board[i][numCol-1] === 'O') {
            queue.push([i, numCol-1]);
            board[i][numCol-1] = 'A';
        }
    }

    for (let i = 0; i < numCol-1; i++) {
        if (board[0][i] == "O") {
            queue.push([0, i]);
            board[0][i] = 'A';
        }
        if (board[numRow-1][i] == "O") {
            queue.push([numRow-1, i]);
            board[numRow-1][i] = "A"
        }
    }

    // console.log("board: ", board)
    // console.log("queue: ", queue)
    // console.log("numRow, numCol: ", numRow, numCol, board[3][1]);

    while (queue.length) {
        let [dRow, dCol] = queue.shift();

        for (let dir of directions) {
            let nextRow = dRow + dir[0];
            let nextCol = dCol + dir[1];

            if (nextRow >= 0 &&
                nextRow < numRow &&
                nextCol >= 0 &&
                nextCol < numCol &&
                board[nextRow][nextCol] === 'O'
            ) {
                queue.push([nextRow, nextCol]);
                board[nextRow][nextCol] = 'A';
            }
        }
    }

    for (let row = 0; row < numRow; row++) {
        for (let col = 0; col < numCol; col++) {
            if (board[row][col] === 'A') {
                board[row][col] = 'O';
            } else if (board[row][col] === 'O') {
                board[row][col] = 'X'
            }
        }
    }
};
