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
    for (let i = 0; i < n; i++) {
        let idx = (nums[i] - 1) % n;
        nums[idx] += n;
    }

    let res = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] <= n) {
            res.push(i+1);
        }
    }

    return res;
};



/**
 * @Idea: when less & equal to n, the value is not appe
 * @Solution:
 * @DataStructure:
 */

