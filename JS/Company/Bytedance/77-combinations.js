var Allcombine = function(n, k) {
    if (n <= 0 || k <= 0 || k > n) return [];
    let res = [];
    let path = [];

    const dfs = (n, k, combination, res) => {
        if (combination.length === k) {
            res.push(Array.from(combination));
            return;
        }

        for (let i = 1; i <= n; i++) {
            combination.push(i);
            dfs(n, k, combination, res);
            combination.pop();
        }
    }

    dfs(n, k, path, res);
    return res;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    if (n <= 0 || k <= 0 || k > n) return [];
    let path = [];

    const dfs = (n, k, start, combination, res) => {
        if (combination.length === k) {
            res.push(Array.from(combination));
            return;
        }

        for (let i = start; i <= n; i++) {
            // if (combination.includes(i)) continue;
            combination.push(i);
            dfs(n, k, i+1, combination, res);
            combination.pop();
        }
    }

    dfs(n, k, 1, path, res);
    return res;
};

const n = 4, k = 2;
let res = combine(n, k)
console.log(res);
