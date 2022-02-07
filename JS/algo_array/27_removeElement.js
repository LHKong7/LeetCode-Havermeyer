/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const n = nums.length;
    let slowPtr = 0, fastPtr = 0;

    while (fastPtr < n) {
        if (nums[fastPtr] !== val) {
            [nums[slowPtr], nums[fastPtr]] = [nums[fastPtr], nums[slowPtr]];
            slowPtr++;
        }
        fastPtr++;
    }

    return slowPtr;
};
