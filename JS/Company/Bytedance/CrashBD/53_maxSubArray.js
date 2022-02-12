/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let res = nums[0];
    let prevSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prevSum = Math.max(nums[i], prevSum + nums[i]);
        res = Math.max(res, currSum);
    }

    return res;
};
