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
 * @return {number}
 */
var rob_memo = function(nums) {
    const memo = new Array(nums.length).fill(-1);

    const dfs = (nums, i, memo) => {
        if (i >= nums.length) return 0;
        if (memo[i] != -1) return memo[i];

        let left = dfs(nums, i + 1, memo);
        let right = dfs(nums, i + 2, memo);

        memo[i] = Math.max(left, right + nums[i]);
        return memo[i];
    }

    return dfs(nums, 0, memo);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob_DP = function(nums) {
    if (nums.length === 1) return nums[0];

    const dp = new Array(nums.length).fill(-1);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i-2] + nums[i]);
    }

    return dp[nums.length-1]
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

