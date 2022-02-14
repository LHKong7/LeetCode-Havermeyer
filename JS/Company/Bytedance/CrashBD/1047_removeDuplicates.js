/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stk = [];

    for (let char of s) {
        if (stk.length && stk[stk.length-1] === char) {
            stk.pop();
        } else {
            stk.push(char);
        }
    }

    return stk.join('');
};
