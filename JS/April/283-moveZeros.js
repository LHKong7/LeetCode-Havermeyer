/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length;

    let leftPtr = 0, rightPtr = 0;
    while (rightPtr < n) {
        if (nums[rightPtr] !== 0) {
            [nums[leftPtr], nums[rightPtr]] = [nums[rightPtr], nums[leftPtr]];
            leftPtr += 1;
        };
        rightPtr += 1;
    };
};

