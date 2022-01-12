/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slowPtr = 0;
    let fastPtr = 0;

    while (fastPtr < nums.length) {
        if (nums[fastPtr] !== 0) {
            // swap
            [nums[fastPtr], nums[slowPtr]] = [nums[slowPtr], nums[fastPtr]];
            slowPtr += 1;
        }
        fastPtr += 1;
    }
};