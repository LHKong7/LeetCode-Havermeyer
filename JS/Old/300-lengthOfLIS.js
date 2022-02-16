/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let maxLen = 1;
    let dp = new Array(nums.length).fill(1);
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) { // increasing
                dp[j] = Math.max(dp[i] + 1, dp[j]);
                maxLen = Math.max(maxLen, dp[j]);
            }
        }
    }

    return maxLen;
};
