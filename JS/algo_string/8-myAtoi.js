/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;

    while (s[i] === ' ') i++;

    let sign = 1;
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    let base = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= 9) {
        // check overflow 2147483647 & -2147483648 
        if (base > Math.floor(2147483647 / 10) 
            || (base ===  Math.floor(2147483647 / 10) && s[i] - '0' > '7')) {
            if (sign > 0) return 2147483647;
            else return -2147483648;
        }
        base = base * 10 + (s[i] - '0');
        i++;
    }

    return sign * base;
};
