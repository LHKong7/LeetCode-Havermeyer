/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    if (!nums && !nums.length) return 0;

    let i = 0, n = nums.length;
    let res = 0;

    while (i < n) {
        let curr = nums[i];
        i += 1;
        while (i <= n && nums[i] > nums[i-1]) {
            curr += nums[i]
            i += 1;
        }
        res = Math.max(curr, res);
    }

    return res;
};
