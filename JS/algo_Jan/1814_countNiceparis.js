/**
 * @param {number[]} nums
 * @return {number}
 */
 var countNicePairs = function(nums) {
    const MOD = 1000000007;
    let res = 0;
    const h = new Map();
    for (const i of nums) {
        let temp = i, j = 0;
        while (temp > 0) {
            j = j * 10 + temp % 10;
            temp = Math.floor(temp / 10);
        }
        res = (res + (h.get(i - j) || 0)) % MOD;
        h.set(i - j, (h.get(i - j) || 0) + 1);
    }
    return res;
};
