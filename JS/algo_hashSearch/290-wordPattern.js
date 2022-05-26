/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordArr = s.split(' ');
    if (pattern.length !== wordArr.length) return false;

    let char2word = new Map();
    let word2char = new Map();
    for (let i = 0; i < s.length; i++) {
        let word = wordArr[i];
        let char = pattern[i];
        if (char2word.has(char) && char2word.get(char) !== word) {
            return false;
        }
        if (word2char.has(word) && word2char.get(word) !== char) {
            return false;
        }
        char2word.set(char, word);
        word2char.set(word, char);
    }

    return true;
};
