/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var findClosest = function(words, word1, word2) {
    const length = words.length;
    let ans = length;
    let index1 = -1, index2 = -1;
    for (let i = 0; i < length; i++) {
        const word = words[i];
        if (word === word1) {
            index1 = i;
        } else if (word === word2) {
            index2 = i;
        }
        if (index1 >= 0 && index2 >= 0) {
            ans = Math.min(ans, Math.abs(index1 - index2));
        }
    }
    return ans;
};
