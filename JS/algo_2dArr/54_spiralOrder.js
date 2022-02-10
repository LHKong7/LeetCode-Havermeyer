/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const m = matrix.length, n = matrix[0].length

    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let row = 0, col = 0, di = 0

    const res = new Array(m * n).fill(0)
    const seen = new Array(m).fill(0).map(() => new Array(n).fill(false))

    for (let i = 0; i < m * n; i++) {
        res[i] = matrix[row][col]
        seen[row][col] = true

        const nextRow = row + dirs[di][0]
        const nextCol = col + dirs[di][1]

        if (nextRow < 0 || nextRow >= m
                || nextCol < 0 || nextCol >= n
                || seen[nextRow][nextCol]) {
            di = (di + 1) % 4
        }

        row = row + dirs[di][0]
        col = col + dirs[di][1]
    }

    return res
};
