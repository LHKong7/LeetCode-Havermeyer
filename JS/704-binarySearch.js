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
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPtr = 0, rightPtr = nums.length - 1;

    while (leftPtr <= rightPtr) {
        let mid = leftPtr +  Math.floor((rightPtr - leftPtr) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            leftPtr = mid + 1;
        } else {
            rightPtr = mid - 1;
        }
    }

    return -1;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

