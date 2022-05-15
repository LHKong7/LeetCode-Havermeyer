/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slowPtr = 0, fastPtr = 1;
    const n = nums.length;
    if (n === 0) return 0;

    while (fastPtr < n) {
        if (nums[slowPtr] !== nums[fastPtr]) {
            slowPtr++;
            [nums[slowPtr], nums[fastPtr]] = [nums[fastPtr], nums[slowPtr]];
        }
        fastPtr++;
    }

    return slowPtr + 1;
};
