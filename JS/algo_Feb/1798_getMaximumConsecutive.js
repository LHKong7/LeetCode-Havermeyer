/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
    let res = 1;
    coins.sort((a, b) => a - b);
    for (const i of coins) {
        if (i > res) {
            break;
        }
        res += i;
    }
    return res;
};