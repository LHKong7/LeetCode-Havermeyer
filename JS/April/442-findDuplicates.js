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
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    if (nums === null && nums.length === 0) return [];
    const res = [], n = nums.length;

    for (let i = 0; i < n; i++) {
        let idx = (nums[i] - 1) % n;
        nums[idx] += n;
    };

    for (let i = 0; i < n; i++) {
        if (nums[i] > 2 * n) res.push(i + 1);
    };

    return res;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

