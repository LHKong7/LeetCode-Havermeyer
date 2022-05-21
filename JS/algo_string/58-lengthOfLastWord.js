/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    let start = 0;

    while (s[end] === ' ') end--;

    while (end >= 0 && s[end] !== ' ') {
        end--;
        start++;
    }

    return start;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let start = 0, end = 0;
    let res = 0;

    while (end < s.length) {
        if (s[start] === ' ') {
            start++;
            end++;;
        } else {
            while (end < s.length && s[end] !== ' ') end++;
            res = end - start;
            while (end < s.length && s[end] === ' ') end++;
            if (end < s.length && s[end] !== ' ') start = end;
        }
    }
    return res;
};
