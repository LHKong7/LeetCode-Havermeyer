/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 *
 * TestCase: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * *****************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums === null || nums.length < 3) return [];
    const res = [], n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break; // // 第一个数大于 0，后面的数都比它大，肯定不成立了
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let leftPtr = i+1, rightPtr = n-1;
        while (leftPtr < rightPtr) {
            const sum = nums[i] + nums[leftPtr] + nums[rightPtr];
            if (sum === 0) {
                res.push([ nums[i], nums[leftPtr], nums[rightPtr] ]);

                while (leftPtr < rightPtr && nums[leftPtr] === nums[leftPtr+1]) leftPtr++;
                while (leftPtr < rightPtr && nums[rightPtr] === nums[rightPtr-1]) rightPtr--;

                leftPtr++;
                rightPtr--;
            } else if (sum > 0) {
                rightPtr--;
            } else {
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

