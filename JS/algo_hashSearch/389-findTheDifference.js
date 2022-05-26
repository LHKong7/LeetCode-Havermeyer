/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const cnt = new Array(26).fill(0);

    for (const char of s) {
        cnt[char.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (const char of t) {
        cnt[char.charCodeAt() - 'a'.charCodeAt()]--;


        if (cnt[char.charCodeAt() - 'a'.charCodeAt()] < 0) return char;
    }

    return ' ';
};
