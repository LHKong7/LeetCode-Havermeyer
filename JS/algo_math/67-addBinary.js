/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '';
    let carry = 0;
    let l1 = a.length-1, l2 = b.length-1;

    while (l1 >= 0 || l2 >= 0) {
        let x = l1 < 0 ? 0 : a[l1] - '0';
        let y = l2 < 0 ? 0 : b[l2] - '0';

        let sum = x + y + carry;
        res += Number.parseInt(sum % 2);
        carry = ~~(sum / 2);


        l1--;
        l2--;
    }

    if (carry !== 0) res += '1';

    return res.split('').reverse().join('');
};
