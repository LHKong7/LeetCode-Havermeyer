/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let n = nums.length;
    if (n <= 2) return nums.length;

    let slowPtr = 1, fastPtr = 2;

    while (fastPtr < n) {
        if (nums[slowPtr - 1] != nums[fastPtr]) {
            slowPtr += 1;
            nums[slowPtr] = nums[fastPtr];
        }
        fastPtr += 1;
    }

    return slowPtr + 1;
};
