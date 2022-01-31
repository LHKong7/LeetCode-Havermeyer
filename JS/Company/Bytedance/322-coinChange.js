/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange_backTracking = function(coins, amount) {
    let minCoin = Number.MAX_SAFE_INTEGER;
    let path = [];

    const dfs = (target, c, path) => {
        if (target === 0) {
            minCoin = Math.min(minCoin, path.length);
        }

        for (let i = 0; i < c.length; i++) {
            if (target - c[i] < 0) continue;
            path.push(c[i]);
            dfs(target-c[i], c, path);
            path.pop()
        }
    }

    dfs(amount, coins, path);
    return minCoin === Number.MAX_SAFE_INTEGER ? -1 : minCoin;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_Memo = function(coins, amount) {
    const memo = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

    const dfs = (target, c) => {
        if (target === 0) {
            return 0;
        }
        if (memo[target] != Number.MAX_SAFE_INTEGER) {
            return memo[target];
        }
        let minCoins = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < c.length; i++) {
            if (target - c[i] < 0) continue;
            let subMinCoins =  dfs(target-c[i], c);
            if (subMinCoins === -1) continue;
            minCoins = Math.min(minCoins, subMinCoins + 1);
        }
        memo[target] = minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
        return memo[target];
    }

    return dfs(amount, coins);
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange_dp = function(coins, amount) {
    if (amount < 0) return -1;
    if (amount === 0) return 0;

    // 1 define states and 2 init states
    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let target = 1; target <= amount; target++) {
        for (coin of coins) {
            if (target >= coin && dp[target - coin] != Number.MAX_SAFE_INTEGER) {
                dp[target] = Math.min(dp[target], dp[target - coin] + 1);
            }
        }
    }

    // return final state
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}

const coins = [1, 2, 5], amount = 11;
let res = coinChange(coins, amount);
console.log(res);
