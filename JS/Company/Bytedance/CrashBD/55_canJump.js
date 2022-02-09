/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;
    let maxPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (maxPos < i) return false;
        maxPos = Math.max(maxPos, i + nums[i]);
    }

    return true;
};
