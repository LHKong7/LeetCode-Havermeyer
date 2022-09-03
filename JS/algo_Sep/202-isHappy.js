/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy_set = function(n) {
    const nextSum = (n) => {
        let res = 0;

        while (n > 0) {
            let val = n % 10;
            res += Math.pow(val, 2);
            n = Math.floor(n / 10)
        }

        return res;
    }

    let hashStore = new Set();
    while (n !== 1 && !hashStore.has(n)) {
        hashStore.add(n);
        n = nextSum(n);
    }
    return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy_twoPointer = function(n) {
    const nextSum = (n) => {
        let res = 0;

        while (n > 0) {
            let val = n % 10;
            res += Math.pow(val, 2);
            n = Math.floor(n / 10)
        }

        return res;
    }

    let slowNum = n, fastNum = nextSum(n);

    while (slowNum !== fastNum && slowNum !== 1) {
        slowNum = nextSum(slowNum);
        fastNum = nextSum(nextSum(fastNum));
    }

    return slowNum === 1;
};
