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
    let minFreq = new Array(26).fill(0);
    let res = [];
    const ASCII_STARTER_IDX = 'a'.charCodeAt();

    for (let i = 0; i < words[0].length; i++) {
        let ascIdx = words[0][i].charCodeAt() - ASCII_STARTER_IDX;
        minFreq[ascIdx] += 1;
    }

    for (let i = 1; i < words.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = 0; j < words[i].length; j++) {
            let ascIdx = words[i][j].charCodeAt() - ASCII_STARTER_IDX;
            freq[ascIdx] += 1;
        };

        for (let k = 0; k < 26; k++) {
            minFreq[k] = Math.min(minFreq[k], freq[k]);
        }
    };

    for (let i = 0; i < 26; i++) {
        while (minFreq[i] !== 0) {
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

