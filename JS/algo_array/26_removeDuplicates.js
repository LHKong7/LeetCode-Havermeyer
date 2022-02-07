/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    let slowPtr = 0, fastPtr = 1;

    while (fastPtr < n) {
        if (nums[slowPtr] !== nums[fastPtr]) {
            slowPtr += 1;
            [nums[slowPtr], nums[fastPtr]] = [nums[fastPtr], nums[slowPtr]];
        }
        fastPtr += 1;
    }

    return slowPtr + 1;
};
