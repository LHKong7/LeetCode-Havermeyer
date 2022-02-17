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
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArr = path.split('/');
    let resStk = [];

    for (let char of pathArr) {
        if (char === '' || char === '.') continue;
        else if (char === '..' && !resStk.length) continue;
        else if (char === '..' && resStk.length) resStk.pop();
        else resStk.push(char)
    }

    if (resStk.length === 0) return '/';
    return '/' + resStk.join('/');
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

