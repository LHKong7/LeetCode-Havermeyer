/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0, fast = 0;
    const n = nums.length;

    while (fast < n) {
        if (nums[fast] !== 0) { // swap elements at slow and fast
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow += 1;
        }

        fast += 1;
    }
};
