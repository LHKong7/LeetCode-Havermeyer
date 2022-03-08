/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let leftPtr = 0, rightPtr = 0;
    let currWindowSum = 0;
    let res = Number.MAX_SAFE_INTEGER;

    while (rightPtr < nums.length) {
        currWindowSum += nums[rightPtr];

        while (currWindowSum >= target) {
            res = Math.min(rightPtr-leftPtr+1, res);
            currWindowSum -= nums[leftPtr];
            leftPtr++;
        }

        rightPtr++;
    }

    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};