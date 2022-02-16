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
 *  给你一个字符串 s，找到 s 中最长的回文子串。
 *
 * TestCase: s = "babad"
 * Output: "bab" "aba" 同样是符合题意的答案。
 * Explanation: 
 * *****************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length === 1) return s[0];
    let n = s.length;
    let res = s[0] + '';
    let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            let isCharEqual = s[i] === s[j];

            if (j - i === 1) {
                dp[i][j] = isCharEqual;
            } else if (!isCharEqual) {
                dp[i][j] = false;
            } else {
                dp[i][j] = dp[i+1][j-1];
            }

            if (dp[i][j] && j-i+1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }

    return res;
};

console.log(longestPalindrome('babad'));


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

