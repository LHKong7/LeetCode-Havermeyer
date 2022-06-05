/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stk = [];
    let preSign = '+';
    let i = 0;

    while (i < s.length) {
        if (s[i] === ' ') {
            i++;
        } else {
            let num = 0;
            while (i < s.length && s[i] <= '9' && s[i] >= '0') {
                num = num * 10 + (s[i].charCodeAt() - '0'.charCodeAt());
                i++
            }

            if (preSign === '+') {
                stk.push(num);
            } else if (preSign === '-') {
                stk.push(-num);
            } else if (preSign === '*') {
                stk.push(stk.pop() * num);
            } else if (preSign === '/') {
                stk.push(parseInt(stk.pop() / num));
            }

            while (i < s.length && s[i] === ' ') i++;

            if (i < s.length) {
                preSign = s[i];
                i++;
            }
        }
    }
    let res = 0;
    while (stk.length) res += stk.pop();

    return res;
};
