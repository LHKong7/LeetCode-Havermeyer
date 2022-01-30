/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let maxVal = 2147483647, minVal =  -2147483648;

    // 1. while
    while (i < s.length && s[i] == ' ') i++;
    if (i === s.length) return 0;

    // 2 check sign
    if (s[i] === '-' || s[i] == '+') {
        if (s[i] == '-') sign = -1;
        i++;
    }

    let base = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        // check overflow max: 2147483647 min: -2147483648
        if (base > Math.floor(maxVal/10) || (base ==  Math.floor(maxVal/10) && (s[i] - '0' > 7))) {
            if (sign == 1) return maxVal;
            else return minVal;
        }

        base = base * 10 + (s[i] - '0');
        i++;
    }

    return sign * base;
};
