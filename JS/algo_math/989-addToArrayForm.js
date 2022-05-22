/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let res = [];
    let n = num.length;

    for (let i = n-1; i >= 0; i--) {
        let currDigital = k % 10;
        k = ~~(k / 10);
        let sum = num[i] + currDigital;

        if (sum >= 10) {
            k++;
            sum -= 10;
        }
        res.push(sum);
    }

    for (; k > 0; k = ~~(k/10)) {
        res.push(k % 10);
    }
    res.reverse();
    return res;
};

// 将整个加数 kk 加入数组表示的数的最低位
var addToArrayForm = function(num, k) {
    const res = [];
    const n = num.length;
    for (let i = n - 1; i >= 0 || k > 0; --i, k = Math.floor(k / 10)) {
        if (i >= 0) {
            k += num[i];
        }
        res.push(k % 10);
    }
    res.reverse();
    return res;
};
