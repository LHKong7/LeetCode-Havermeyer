/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *  给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 *      岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 *      此外，你可以假设该网格的四条边均被水包围。
 *
 * TestCase:
 *  grid = [
 *      ["1","1","1","1","0"],
 *      ["1","1","0","1","0"],
 *      ["1","1","0","0","0"], 
 *      ["0","0","0","0","0"]
 *  ]
 * Output: 1
 * Explanation:
 * *****************************************************************/

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

var numIslands_BFS = function(grid) {
    let numRow = grid.length;
    if (numRow === 0) {
        return 0;
    }
    let numCol = grid[0].length;

    let num_isLands = 0;
    for (let row = 0; row < numRow; row++) {
        for (let col = 0; col < numCol; col++) {
            if (grid[row][col] === '1') {
                num_isLands += 1;
                grid[row][col] = '0';
                let neighbors = [[row, col]];

                while (neighbors.length) {
                    let ele = neighbors.pop();
                    let x = ele[0], y = ele[1];

                    if (x - 1 >= 0 && grid[x-1][y] === '1') { // north
                        neighbors.push([x-1, y]);
                        grid[x-1][y] = 0;
                    }

                    if (x + 1 < numRow && grid[x+1][y] === '1') {
                        neighbors.push([x+1, y]);
                        grid[x+1][y] = 0;
                    }

                    if(y - 1 >= 0 && grid[x][y - 1] === '1') {
                        neighbors.push([x, y - 1])
                        grid[x][y - 1] = 0
                    }

                    if(y + 1 < numCol && grid[x][y + 1] === '1') {
                        neighbors.push([x, y + 1])
                        grid[x][y + 1] = 0
                    }
                }
            }
        }
    }

    return num_isLands;
}

let res = numIslands_BFS(grid);
console.log(res);


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

