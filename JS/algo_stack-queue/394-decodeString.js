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
 * @return {string}
 */
var decodeString = function(s) {
    let res = '';
    let num = 0;
    const numStack = [], strStack = [];

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            num = num * 10 + (char.charCodeAt() - '0'.charCodeAt());
        } else if (char === '[') {
            numStack.push(num);
            strStack.push(res);
            num = 0;
            res = '';
        } else if (char === ']') {
            const item = res;
            for (let i = 1; i < numStack[numStack.length - 1]; i++) {
                res += item;
            }

            res = strStack[strStack.length - 1] + res;
            numStack.pop();
            strStack.pop();
        } else {
            res += char;
        }
    }

    return res;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

