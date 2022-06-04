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
    const pathLst = path.split('/');
    const pathStk = [];

    for (const char of pathLst) {
        if (char === '' || char === '.') continue;
        else if (char === '..' && pathStk.length === 0) continue;
        else if (char === '..' && pathStk.length !== 0) pathStk.pop();
        else pathStk.push(char);
    }

    if (pathStk.length === 0) return '/';
    else return '/' + pathStk.join('/');
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

