/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n === 0) return false;

    while (n % 2 === 0) {
        n = n / 2;
    }

    return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0 || n === -2147483648) return false;
    return (n & (n-1)) === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n === 0 || n === -2147483648) return false;
    return (n & -n) === n;
};
