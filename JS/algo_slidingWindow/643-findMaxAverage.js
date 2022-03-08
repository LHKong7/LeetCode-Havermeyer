/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let leftPtr = 0, rightPtr = 0;
    let currSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;

    while (rightPtr < nums.length) {
        currSum += nums[rightPtr];

        if (rightPtr - leftPtr + 1 === k) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= nums[leftPtr];
            leftPtr++;
        }

        rightPtr++;
    }

    return maxSum / k;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

