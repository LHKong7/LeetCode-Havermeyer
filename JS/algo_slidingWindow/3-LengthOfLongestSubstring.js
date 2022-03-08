/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    if (n <= 1) return n;
    let maxLen = 1;

    let leftPtr = 0, rightPtr = 0;
    let charStore = new Set();

    while (rightPtr < n) {
        let rightChar = s[rightPtr];

        while (charStore.has(rightChar)) {
            charStore.delete(s[leftPtr]);
            leftPtr++;
        }

        maxLen = Math.max(maxLen, rightPtr - leftPtr + 1);
        charStore.add(s[rightPtr]);
        rightPtr++;
    }

    return maxLen;
};
