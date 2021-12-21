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
 * @return {string[][]}
 */
 var partition = function (s) {
    const res = []; 
    dfs(res, [], s, 0); 	
    return res;
};

var dfs = function(res, temp, s, start) { 
    if (start == s.length) {
        res.push(temp.slice());
        return;
    }
    for (let i = start; i < s.length; i++) {
        if (isPalindrome(s, start, i)) {
            temp.push(s.substring(start, i + 1));
            dfs(res, temp, s, i + 1);
            temp.pop();
        }
    }
}

var isPalindrome = (s, leftPtr, rightPtr) => {
    while (leftPtr < rightPtr) {
        if (s[leftPtr] !== s[rightPtr]) {
            return false;
        }
        leftPtr += 1;
        rightPtr -= 1;
    }

    return true;
}


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

