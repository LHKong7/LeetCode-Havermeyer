/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
    const strNumber = n.toString().split("");
    let i = 1;

    while (i < strNumber.length && strNumber[i-1] <= strNumber[i]) {
        i++;
    }

    if (i < strNumber.length) {
        while (i > 0 && strNumber[i-1] > strNumber[i]) {
            strNumber[i - 1] -= 1;
            i--;
        }
        i++;
        while (i < strNumber.length) {
            strNumber[i] = '9';
            i++;
        }
    }

    return parseInt(strNumber.join(""));
};
