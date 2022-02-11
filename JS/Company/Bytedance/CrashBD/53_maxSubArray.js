/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let res = nums[0];
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        res = Math.max(res, currSum);
    }

    return res;
};
