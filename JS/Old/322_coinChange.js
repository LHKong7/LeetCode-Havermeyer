/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if (amount < 0) return -1;
    if (amount == 0) return 0;
    let dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin && dp[i - coin] !== Number.MIN_SAFE_INTEGER) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }

    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
