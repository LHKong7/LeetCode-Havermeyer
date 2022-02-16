/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const n = s1.length, m = s2.length;
    if (n > m) return false;
    let cnt = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        cnt[s1[i].charCodeAt() - 'a'.charCodeAt()] += 1;        
    }

    let left = 0, right = 0;
    while (right < m) {
        let valIdx = s2[right].charCodeAt() - 'a'.charCodeAt();
        cnt[valIdx] -= 1;

        while (cnt[valIdx] < 0) {
            cnt[s2[left].charCodeAt() - 'a'.charCodeAt()] += 1
            left += 1;
        }

        if (right - left + 1 === n) return true;
        right += 1;
    }

    return false;
}

let s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));
