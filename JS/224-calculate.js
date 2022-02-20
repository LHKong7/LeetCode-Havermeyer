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
var calculate = function(s) {
    const stack = [];
    let sign = 1, num = 0, res = 0;

    for (const char of s) {
        if (char <= '9' && char >= '0') {
            num = num * 10 + (char.charCodeAt() - '0'.charCodeAt());
        } else if (char === '+') {
            res += sign * num;
            sign = 1;
            num = 0;
        } else if (char === '-') {
            res += sign * num;
            sign = -1;
            num = 0;
        } else if (char === '(') {
            stack.push(res);
            stack.push(sign);
            sign = 1;
            res = 0;
        } else if (char === ')') {
            res += sign * num;
            res *= stack[stack.length - 1];
            stack.pop();
            res += stack[stack.length - 1];
            stack.pop();
            num = 0;
        }
    }

    return res + sign * num;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

