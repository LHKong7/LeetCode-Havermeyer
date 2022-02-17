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
    if (s.length % 2 !== 0) return false;
    let myMap = new Map();

    myMap.set('(', ')');
    myMap.set('[', ']');
    myMap.set('{', '}');
    let stk = [];

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stk.push(char);
        } else {
            if (myMap.get(stk.pop()) !== char) return false;
        }
    }

    return stk.length === 0;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

