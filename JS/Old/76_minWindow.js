/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let m = s.length, n = t.length;
    if (n > m) return '';

    let left = 0, right = 0;
    let tCount = new Array(60).fill(0); // count the char appear in string t
    let windowCount = new Array(60).fill(0);
    let uniqueChars = 0, matchedChars = 0;
    let res = [-1, 0, 0]; // 0: res length, 1: leftPtr, 2: rightPtr

    for (let i = 0; i < n; i++) {
        let charIdx = t[i].charCodeAt() - 'A'.charCodeAt();
        if (tCount[charIdx] === 0) uniqueChars++;
        tCount[charIdx] += 1;
    }

    while (right < m) {
        let rightChar = s[right];
        let rCharIdx = rightChar.charCodeAt() - 'A'.charCodeAt();
        windowCount[rCharIdx] += 1;

        if (windowCount[rCharIdx] === tCount[rCharIdx]) matchedChars += 1;

        while (left <= right && matchedChars === uniqueChars) {
            // shrink window size because we want to find the shortest substring
            if (res[0] === -1 || right - left + 1 < res[0]) {
                res[0] = right - left + 1;
                res[1] = left;
                res[2] = right;
            }

            let leftChar = s[left];
            let lCharIdx = leftChar.charCodeAt() - 'A'.charCodeAt();
            windowCount[lCharIdx] -= 1;
            if (windowCount[lCharIdx] < tCount[lCharIdx]) {
                matchedChars -= 1;
            }
            left++;
        }
        right++;
    }

    return res[0] === -1 ? "" : s.substring(res[1], res[2]+1);
};
