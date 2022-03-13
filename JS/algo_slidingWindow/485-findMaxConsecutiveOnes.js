/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = Number.MIN_SAFE_INTEGER;
    let curr = 0;
    for (let num of nums) {
        if (num === 1) curr++;
        else {
            res = Math.max(curr, res);
            curr = 0;
        }
    }

    return Math.max(curr, res);
};

var findMaxConsecutiveOnes_slidingWindow = function(nums) {
    let leftPtr = 0, rightPtr = 0;
    let res = 0;

    while (rightPtr < nums.length) {
        if (nums[rightPtr] === 0) {
            res = Math.max(rightPtr-leftPtr, res);
            leftPtr = rightPtr+1;
        }
        rightPtr++;
    }

    return Math.max(rightPtr-leftPtr, res);
};
