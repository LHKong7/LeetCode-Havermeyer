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
    const n = s.length;

    if (n < 2) {
        return s;
    }

    let maxLen = 1;
    let start = 0;
    let dp = new Array(n).fill(false).map(() => new Array(n).fill(false)); // create n length 2D array

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    console.log(dp)

    for (let i = 2; i < n + 1; i++) {
        for (let j = 0; j < n; ++j) {
            rightBounary = i + j - 1;

            if (rightBounary >= n)
                break;
            
            if (s[j] != s[rightBounary]) {
                dp[j][rightBounary] = false;
            } else {
                if ((rightBounary - j) < 3) {
                    dp[j][rightBounary] = true;
                } else {
                    dp[j][rightBounary] = dp[j+1][rightBounary-1]
                }
            }

            if (dp[j][rightBounary] == true && ((rightBounary-j+1) > maxLength)) {
                maxLength = rightBounary - j + 1;
                start = j;
            }
        }
    }
};

console.log(longestPalindrome('babad'));


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

