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
 *  给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 *  字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
 *
 * TestCase: text = "loonbalxballpoon"
 * Output: 2
 * Explanation:
 * *****************************************************************/

/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    let arr = [0, 0, 0, 0, 0];
    for (let char of text) {
        if (char === 'b') arr[0]++;
        if (char === 'a') arr[1]++;
        if (char === 'l') arr[2]++;
        if (char === 'o') arr[3]++;
        if (char === 'n') arr[4]++;
    }
    arr[2] = Math.floor(arr[2] / 2);
    arr[3] = Math.floor(arr[3] / 2);
    return Math.min(...arr);
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

