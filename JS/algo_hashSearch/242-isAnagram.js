/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Array(26).fill(0);

    for (const char of s) map[char.charCodeAt() - 'a'.charCodeAt()]++;
    for (const char of t) {
        map[char.charCodeAt() - 'a'.charCodeAt()]--;
        if (map[char.charCodeAt() - 'a'.charCodeAt()] < 0) return false;
    }

    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let hashStore = new Map();

    for (const char of s) {
        if (hashStore.has(char)) {
            hashStore.set(char, hashStore.get(char) + 1);
        } else {
            hashStore.set(char, 1);
        }
    }
    for (const char of t) {
        hashStore.set(char, (hashStore.get(char) || 0) - 1);
        if (hashStore.get(char) < 0) return false;
    };

    return true;
};
