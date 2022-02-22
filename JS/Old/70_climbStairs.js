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
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;

    for (let i = 1; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }

    return r;
};

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs_DP = function(n) {
    const dp = new Array(n+1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-2] + dp[i-1];
    }

    return dp[n];
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

