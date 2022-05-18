/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr_BF = function(haystack, needle) {
    let m = haystack.length, n = needle.length;

    for (let i = 0; i < m; i++) {
        let k = i;
        
        for (let j = 0; j < n; j++) {
            if (haystack[k] === needle[j]) {
                k++;

                if (j === n-1) return i;
            } else {
                break;
            }
        }
    }

    return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr_BF2 = function(haystack, needle) {
    let m = haystack.length, n = needle.length;
    if (m < n) return -1;

    let patternFirstChar = needle[0];
    for (let i = 0; i < m; i++) {
        if (haystack[i] !== patternFirstChar) {
            while (++i < m && haystack[i] !== patternFirstChar);
        }

        if (i < m) {
            let k = i;

            for (let j = 0; j < n; j++) {
                if (haystack[k] === needle[j]) {
                    k++;

                    if (j === n-1) return i;
                } else {
                    break;
                }
            }
        }
    }

    return -1;
};

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
// 根据好前缀字符串的特点，来计算出模式串往后移的位数 找到好前缀的【最长匹配前缀子串】
var strStr = function(haystack, needle) {
    const getNexts = (pattern) => {
        const n = pattern.length;
        // bug 修复： 如果只有一个字符的话，就不计算 next 数组
        if (n == 1) return [];
    
        const next = new Array(n - 1).fill(0);
        next[0] = -1;
    
        for (let j = 1; j < n - 1; j++) {
            if (pattern[next[j - 1] + 1] == pattern[j]) {
                next[j] = next[j - 1] + 1;
            } else {
                let pre = next[j - 1];
                while (pre >= 0 && pattern[pre + 1] != pattern[j]) {
                    // 看前一个【最长匹配前缀字符串】
                    pre = next[pre];
                }
    
                if (pattern[pre + 1] == pattern[j]) {
                    next[j] = pre + 1;
                } else {
                    next[j] = pre;
                }
            }
        }
    
        // 最值问题
        return next;
    };

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
