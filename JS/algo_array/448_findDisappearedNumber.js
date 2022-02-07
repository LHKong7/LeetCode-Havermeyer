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
 *  给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 *      请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 *
 * TestCase: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * Explanation:
 * *****************************************************************/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    for (const num of nums) {
        const x = (num - 1) % n;
        nums[x] += n;
    }
    const ret = [];
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            ret.push(i + 1);
        }
    }
    return ret;
};




/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

