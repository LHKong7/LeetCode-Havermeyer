/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    if (n <= 1) return n;

    let leftPtr = 0, rightPtr = 0;
    let uniqueSet = new Set();
    let res = 0;
    while (rightPtr < n) {
        while (uniqueSet.has(s[rightPtr])) {
            uniqueSet.delete(s[leftPtr]);
            leftPtr += 1;
        };

        res = Math.max(res, rightPtr - leftPtr + 1);
        uniqueSet.add(s[rightPtr]);
        rightPtr += 1;
    };

    return res;
};

