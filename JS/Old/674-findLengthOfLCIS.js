/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let res = 0;
    let n = nums.length;
    let slow = 0;
    for (let fast = 0; fast < n; fast++) {
        if (nums[fast - 1] >= nums[fast]) {
            slow = fast;
            continue;
        }
        res = Math.max(res, fast - slow + 1)
    }

    return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS_DP = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    let dp = new Array(nums.length).fill(1);

    let maxLen = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            dp[i] = 1 + dp[i-1];
            maxLen = Math.max(maxLen, dp[i]);
        }
    }

    return maxLen;
};
