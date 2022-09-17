/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const n = s.length, hashStore = new Map();
    let res = -1;

    for (let i = 0; i < n; i++) {
        if (hashStore.get(s[i]) !== undefined) {
            res = Math.max(res, i - hashStore.get(s[i]) - 1);
        } else {
            hashStore.set(s[i], i);
        }
    }

    return res;
};
