/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    let maxOne = -1, maxTwo = -1;
    let idx = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxOne) {
            maxTwo = maxOne;
            maxOne = nums[i];
            idx = i;
        } else if (nums[i] > maxTwo) {
            maxTwo = nums[i];
        }
    }

    return maxOne >= maxTwo * 2 ? idx : -1;
};
