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
 *  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 *      你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *         你可以按任意顺序返回答案。
 *
 * TestCase: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * *****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_1 = function(nums, target) {
    const n = nums.length;
    const hashStore = new Map();

    for (let i = 0; i < n; i++) {
        if (hashStore.has(target - nums[i])) {
            return [hashStore.get(target - nums[i]), i];
        }

        hashStore.set(nums[i], i);
    }

    return [-1, -1]
};




/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

