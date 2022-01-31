var coinChange_backTracking = function(coins, amount) {
    const memo = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

}

const coins = [1, 2, 5], amount = 11;
let res = coinChange(coins, amount);
console.log(res);
