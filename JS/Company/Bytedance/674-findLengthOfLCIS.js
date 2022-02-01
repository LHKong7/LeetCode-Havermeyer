/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let res = 0;
    let n = nums.length;
    let slow = 0;
    for (let fast = 0; fast < n; fast++) {
        if (nums[fast - 1] >= nums[fast]) {
            slow = fast;
            continue;
        }
        res = Math.max(res, fast - slow + 1)
    }

    return res;
};
