/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    // let hashStore = new Map();

    // for (let char of s1) {
    //     hashStore.set(char, hashStore.get(char) + 1 || 1);
    // }

    // for (let char of s2) {
    //     if (hashStore.get(char) === 0 || !hashStore.get(char)) return false;

    //     hashStore.set(char, hashStore.get(char) - 1);
    // }

    // return true;
    return s1.length == s2.length && [...s1].sort().join('') === [...s2].sort().join('')
};
