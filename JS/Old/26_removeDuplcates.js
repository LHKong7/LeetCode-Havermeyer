/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }

    let slowPtr = 1, fastPtr = 1;

    while (fastPtr < n) {
        if (nums[fastPtr] != nums[fastPtr -1]) {
            nums[slowPtr] = nums[fastPtr];
            slowPtr += 1;
        }
        fastPtr += 1;
    }

    nums.splice(slowPtr, n-slowPtr);
};