/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let memo = [];

    const dfs = (n, memory) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (memory[n]) {
            return memory[n];
        }

        let leftFib = dfs(n - 1, memory);
        let rightFib = dfs(n - 2, memory);
        memory[n] = leftFib + rightFib;

        return leftFib + rightFib;
    }
    let res = dfs(n, memo);
    return res;
};

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n === 0) return 0
    let res = [1, 1];

    for (let i = 2; i < n; i++) {
        res.push(res[i-1] + res[i-2])
    }
    return res[n-1];
};

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n <= 1) return n;
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }

    return r;
};
