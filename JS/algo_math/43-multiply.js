/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) { // TIME: O(mn + n^2)
    if (num1 === '0' || num2 === '0') return '0';

    let res = '0';
    let m = num1.length, n = num2.length;
    for (let i = n-1; i >= 0; i--) {
        let currRes = '';
        for (let j = n-1; j > i; j--) {
            currRes += '0';
        }
        let y = num2[i] - '0'; // 转整
        let carry = 0;
        for (let j = m-1; j >= 0; j--) {
            let x = num1[j] - '0';
            let prod = x * y + carry;
            currRes += (prod % 10);
            carry = ~~(prod / 10);
        }

        if (carry != 0) currRes += carry;
        res = addStrings(currRes.split('').reverse().join(''), res);
    }

    return res;
};

var addStrings = function(num1, num2) {
    let res = '';
    let carry = 0;
    let l1 = num1.length-1, l2 = num2.length-1;

    while (l1 >= 0 || l2 >= 0) {
        let x = l1 < 0 ? 0 : num1[l1] - '0';
        let y = l2 < 0 ? 0 : num2[l2] - '0';

        let sum = x + y + carry;
        res += Number.parseInt(sum % 10);
        carry = ~~(sum / 10);


        l1--;
        l2--;
    }

    if (carry !== 0) res += '1';

    return res.split('').reverse().join('');
};
