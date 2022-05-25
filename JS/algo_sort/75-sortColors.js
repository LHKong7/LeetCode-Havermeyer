/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0, p1 = 0; // p0 for zero, p1 for one

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            [nums[p1], nums[i]] = [nums[i], nums[p1]];
            p1++;
        } else if (nums[i] === 0) {
            [nums[p0], nums[i]] = [nums[i], nums[p0]];
            if (p0 < p1) {
                [nums[i], nums[p1]] = [nums[p1], nums[i]];
            }
            p0++;
            p1++;
        }
    }
};
