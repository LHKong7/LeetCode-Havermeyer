/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let n = s1.length, m = s2.length;
    if (n > m) return false;
    let cnt = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        cnt[s1[i].charCodeAt() - 'a'.charCodeAt()] += 1;
    };

    let left = 0, right = 0;
    while (right < m) {
        let validIdx = s2[right].charCodeAt() - 'a'.charCodeAt();
        cnt[validIdx] -= 1;

        while (cnt[validIdx] < 0) {
            cnt[s2[left].charCodeAt() - 'a'.charCodeAt()] += 1;
            left += 1;
        };

        if (right - left + 1 === n) return true;
        right += 1;
    };

    return false;
};

let s1 = "ab", s2 = "eidbaooo";
let res = checkInclusion(s1, s2);
console.log("res: ", res);

