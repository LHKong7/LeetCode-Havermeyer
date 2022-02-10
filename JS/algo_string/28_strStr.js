/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    const m = haystack.length, n = needle.length
    if (n == 0) return 0
    if (m < n) return -1
    for (let i = 0; i < m - n + 1; i++) {
        if (haystack.charCodeAt(i) == needle.charCodeAt(0)
                && haystack.substring(i, i+n) == needle) {
            return i;
        }
    }
    return -1;
};

// KMP
// 时间复杂度：O(m + n)
// 空间复杂度：O(n)
var strStr = function(haystack, needle) {
    const m = haystack.length, n = needle.length
    if (n == 0) return 0
    if (m < n) return -1
    const nexts = getNexts(needle)

    let j = 0
    for (let i = 0; i < m; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = nexts[j - 1] + 1
        }
        if (haystack[i] == needle[j]) j++
        if (j == n) return i - n + 1
    }
    return -1
};
