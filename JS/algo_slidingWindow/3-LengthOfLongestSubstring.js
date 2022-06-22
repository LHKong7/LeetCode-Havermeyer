/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    if (n <= 1) return n;
    let maxLen = 1;

    const store = new Set();
    let leftPtr = 0, rightPtr = 0;

    while (rightPtr < n) {
        let currChar = s[rightPtr];

        while (store.has(currChar)) {
            store.delete(s[leftPtr]);
            leftPtr++;
        }
        maxLen = Math.max(maxLen, rightPtr - leftPtr + 1);
        store.add(s[rightPtr]);
        rightPtr++;
    }

    return maxLen;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    if (n <= 1) return n;
    let maxLen = 1;

    const mapStore = new Map();
    let leftPtr = 0, rightPtr = 0;

    while (rightPtr < n) {
        let currChar = s[rightPtr];
        let rightCharIdx = mapStore.get(currChar);

        if (rightCharIdx !== undefined) {
            leftPtr = Math.max(leftPtr, rightCharIdx);
        }
        maxLen = Math.max(maxLen, rightPtr - leftPtr + 1);
        mapStore.set(currChar, rightPtr + 1);
        rightPtr++;
    }

    return maxLen;
};
