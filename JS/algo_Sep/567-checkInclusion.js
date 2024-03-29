/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let n = s1.length, m = s2.length;

    if (n > m) return false;

    const cnt = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        cnt[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let left = 0;
    for (let right = 0; right < m; right++) {
        let char = s2[right].charCodeAt() - 'a'.charCodeAt();
        cnt[char]--;

        while (cnt[char] < 0) {
            cnt[s2[left].charCodeAt() - 'a'.charCodeAt()]++;
            left++;
        }

        if (right-left+1 === n) return true;
    }

    return false;
};
