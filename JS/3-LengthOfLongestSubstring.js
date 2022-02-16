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
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mySet = new Set();
    let res = 0;
    const n = s.length;
    let rightPtr = -1;

    for (let i = 0; i < n; i++) {
        if (i !== 0) {
            mySet.delete(s[i-1]);
        }

        while (rightPtr + 1 < n && !mySet.has(s[rightPtr + 1])) {
            mySet.add(s[rightPtr + 1]);
            rightPtr++;
        }

        res = Math.max(res, rightPtr - i + 1);
    }

    return res;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

