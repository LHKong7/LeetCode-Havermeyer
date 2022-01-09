/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let preSum = 0, res = 1, l = 0;

    for (let r = 1; r < n; r++) {
        preSum += (nums[r] - nums[r-1]) * (r - l);

        while (preSum > k) {
            preSum -= nums[r] - nums[l];
            l += 1;
        }

        res = Math.max(res, r - l + 1);
    }
    return res;
};