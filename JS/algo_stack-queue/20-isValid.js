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
var isValid = function(s) {
    const stk = [];
    const myMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ])

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            let stkELe = stk.pop();
            if (myMap.get(stkELe) !== s[i]) {
                return false;
            }
        } else {
            stk.push(s[i]);
        }
    }

    return stk.length === 0;
};

var isValid = function(s) {
    if ((s.length % 2) !== 0) return false;
    let stk = [];

    for (const char of s) {
        if (stk.length !== 0 && (char === ')' || char === ']' || char === '}')) {
            if ((char === ')' && stk[stk.length-1] == '(') ||
                (char === ']' && stk[stk.length-1] == '[') ||
                (char === '}' && stk[stk.length-1] == '{')) {
                stk.pop();
            } else {
                return false;
            }
        } else {
            stk.push(char);
        }
    }

    return stk.length === 0;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

