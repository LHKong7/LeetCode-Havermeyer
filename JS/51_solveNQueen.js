/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    let rows = new Array(n).fill(0);
    let cols = new Array(n).fill(0);
    let mains = new Array(2 * n - 1).fill(0);
    let secondary = new Array(2 * n - 1).fill(0);
    const output = []

    const placeQueen = (row, col) => {
        rows[row] = col;
        cols[col] = 1;
        mains[row - col + n - 1] = 1;
        secondary[row + col] = 1;
    }

    const removeQueen = (row, col) => {
        rows[row] = 0;
        cols[col] = 0;
        mains[row - col + n - 1] = 0;
        secondary[row + col] = 0;
    }

    const isNotUnderAttack = (row, col) => {
        let res = cols[col] + mains[row - col + n - 1] + secondary[row + col];

        return res === 0;
    }

    const addSolution = () => {
        const solution = []
        for (let i = 0; i < n; i++) {
            const col = rows[i]
            let sb = "";
            for(let j = 0; j < col; ++j) sb += "."
            sb += "Q"
            for(let j = 0; j < n - col - 1; ++j) sb += "."
            solution.push(sb)
        }
        output.push(solution)
    }

    const dfs = (row) => {
        if (row >= n) return;

        for (let col = 0; col < n; col++) {
            if (isNotUnderAttack(row, col)) {
                placeQueen(row, col);

                if (row == n-1) addSolution();
                dfs(row + 1);
                removeQueen(row, col); // backTracking
            }
        }
    }

    dfs(0)

    return output;
};
