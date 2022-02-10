/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let n = s.length;
    let stk = []; // keep the state of each char and return the res string

    for (let i = 0; i < n; i++) {
        if (stk[stk.length - 1] === s[i]) {
            stk.pop();
            continue;
        }
        stk.push(s[i]);
    }

    return stk.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const chars = s.split("")
    let slow = -1, fast = 0
    while (fast < s.length) {
        if (slow >= 0 && chars[slow] == chars[fast]) {
            slow--
        } else {
            slow++
            chars[slow] = chars[fast]
        }
        fast++;
    }
    return chars.join("").substring(0, slow + 1)
};
