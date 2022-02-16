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
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern_TWOPointer = function(s) {
    const n = s.length;

    for (let len = 1; len * 2 <= n; len++) { // subMatchedString length <= n/2
        if (n % len === 0) { // n 一定是 n' 的倍数；
            let isMatched = true;
            for (let j = len; j < n; j++) {
                if (s[j] !== s[j - len]) {
                    isMatched = false;
                    break;
                }
            }

            if (isMatched) return true;
        }
    }

    return false;
};




/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

