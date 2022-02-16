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
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res = [];
    let minFreq = new Array(26).fill(0);

    for (let char of words[0]) {
        minFreq[char.charCodeAt() - 'a'.charCodeAt()] += 1;
    }

    for (let i = 1; i < words.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = 0; j < words[i].length; j++) {
            freq[words[i][j].charCodeAt() - 'a'.charCodeAt()] += 1;
        }

        for (let k = 0; k < 26; k++) {
            minFreq[k] = Math.min(minFreq[k], freq[k]);
        }
    }

    for (let i = 0; i < 26; i++) {
        while (minFreq[i] != 0) {
            res.push(String.fromCharCode(i + 'a'.charCodeAt()));
            minFreq[i]--;
        }
    }
    
    return res;
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

