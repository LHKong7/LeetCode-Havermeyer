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
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let leftPtr = 0, rightPtr = height.length - 1;

    while (leftPtr < rightPtr) {
        let maxArea = Math.min(height[leftPtr], height[rightPtr]) * (rightPtr - leftPtr);
        res = Math.max(maxArea, res);

        if (height[leftPtr] <= height[rightPtr]) {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }

    return res;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

