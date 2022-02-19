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
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums === null || nums.length < 3) return [];
    const n = nums.length;
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i-1]) continue; // remove duplicates
        let leftPtr = i + 1;
        let rightPtr = n - 1;

        while (leftPtr < rightPtr) {
            const sum = nums[i] + nums[leftPtr] + nums[rightPtr];
            if (sum === 0) {
                res.push([nums[i], nums[leftPtr], nums[rightPtr]]);

                while (leftPtr < rightPtr && nums[leftPtr] == nums[leftPtr+1]) leftPtr++;
                while (leftPtr < rightPtr && nums[rightPtr] === nums[rightPtr-1]) rightPtr--;
                leftPtr++;
                rightPtr--;
            } else if (sum > 0) {
                rightPtr--;
            } else if (sum < 0) {
                leftPtr++;
            }
        }
    }

    return res;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

