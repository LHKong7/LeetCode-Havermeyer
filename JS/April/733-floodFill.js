/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let row = image.length, col = image[0].length;
    let currColor = image[sr][sc];
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const dfs = (x, y) => {
        if (image[x][y] === currColor) {
            image[x][y] = newColor;

            for (let dir of directions) {
                let nextRow = x + dir[0], nextCol = y + dir[1];
                if (0 <= nextRow && nextRow < row && 0 <= nextCol && nextCol < col && image[nextRow][nextCol] === currColor) {
                    dfs(nextRow, nextCol);
                }
            }
        }
    }

    if (currColor != newColor) {
        dfs(sr, sc);
    };

    return image;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let currColor = image[sr][sc];
    if (currColor === newColor) return image;

    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    let row = image.length, col = image[0].length;
    let queue = [[sr, sc]];
    image[sr][sc] = newColor;
    while (queue.length) {
        let cell = queue.shift();
        for (let dir of directions) {
            let nextRow = dir[0] + cell[0];
            let nextCol = dir[1] + cell[1];

            if (nextRow >= 0 && nextRow < row && nextCol >= 0 && nextCol < col && image[nextRow][nextCol] === currColor) {
                queue.push([nextRow, nextCol]);
                image[nextRow][nextCol] = newColor;
            }
        }
    }

    return image;
};

