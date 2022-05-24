var hammingDistance = function(x, y) {
    let diff = x ^ y;

    let res = 0;
    while (diff != 0) {
        diff = diff & (diff-1);
        res++;
    }

    return res;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    if (!nums) return 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            res += hammingDistance(nums[i], nums[j]);
        }
    }

    return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let res = 0;
    const n = nums.length;
    const cnt = new Array(32).fill(0);

    for (let num of nums) {
        let i = 0;
        while (num > 0) {
            cnt[i] += num & 1;
            num >>= 1;
            i++;
        }
    }

    for (const k of cnt) {
        res += k * (n-k);
    }

    return res;
};
