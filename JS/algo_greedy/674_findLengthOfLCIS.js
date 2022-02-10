/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let n = nums.length;
    let slow = 0, fast = 1;
    let res = 1;

    while (fast < n) {
        if (nums[fast - 1] >= nums[fast]) {
            slow = fast;
            fast += 1;
            continue;
        }

        res = Math.max(res, fast - slow + 1);
        fast += 1;
    }

    return res;
};
