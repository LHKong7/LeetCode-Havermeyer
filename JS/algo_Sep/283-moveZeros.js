/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slowPtr = 0, fastPtr = 0;
    const n = nums.length;

    while (fastPtr < n) {
        if (nums[fastPtr] !== 0) {
            [nums[slowPtr], nums[fastPtr]] = [nums[fastPtr], nums[slowPtr]];
            slowPtr++;
        }

        fastPtr++;
    }
};
