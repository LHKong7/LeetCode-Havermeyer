/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
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
