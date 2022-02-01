/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    const map = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    let res = 0;
    for (const item of map) {
        res += item[1] - (item[1] % 2);

        if (item[1] % 2 == 1 && res % 2 == 0) {
            res += 1;
        }
    }

    return res;
};
