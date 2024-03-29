/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let mask = 0;
    for (let i = 0; i < allowed.length; i++) {
        const c = allowed[i];
        mask |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
    }
    let res = 0;
    for (const word of words) {
        let mask1 = 0;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            mask1 |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
        }
        if ((mask1 | mask) === mask) {
            res++;
        }
    }
    return res;
};

