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
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;
    const res = new Array(Math.min(s.length, numRows)).fill("");
    let ans = '';

    let currRow = 0;
    let goingDown = false;

    for (let char of s) {
        res[currRow] += char;
        if (currRow == 0 || currRow == numRows - 1) goingDown = !goingDown;
        
        if (goingDown) currRow += 1;
        else currRow -= 1;ßßß
    }

    for (let ele of res) {
        ans += ele;
    }

    return ans;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

