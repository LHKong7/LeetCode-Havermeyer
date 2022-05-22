// 方法一： 对每一位进行测试，看是否为 1 : n & (1 << (i-1))
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;
    for (let i = 1; i <= 32; i++) {
        if ((n & (1 << (i-1))) !== 0) {
            res++;
        }
    }

    return res;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            res++;
        }
    }

    return res;
};

// 方法二： 每次移除最后一个 1， 直到 n 为 0
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;

    while (n !== 0) {
        n = n & (n-1);
        res++;
    }

    return res;
};
