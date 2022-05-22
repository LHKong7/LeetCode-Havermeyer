/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;

    for (let i = n-1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;

            for (let j = i+1; j < n; j++) {
                digits[j] = 0;
            }

            return digits;
        }
    }

    let res = new Array(n+1).fill(0);
    res[0] = 1;

    return res;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;

    for (let i = n-1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;

        if (digits[i] !== 0) return digits;
    }

    let res = new Array(n+1).fill(0);
    res[0] = 1;

    return res;
};
