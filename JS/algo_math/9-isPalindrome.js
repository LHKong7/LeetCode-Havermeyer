/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) return true;
    if (x < 0 || (x % 10 === 0)) return false;

    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + (x % 10);
        x = ~~(x / 10);
    }

    return x === revertedNumber || x === ~~(revertedNumber / 10);
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome_String = function(x) {
    let strNum = x.toString();
    let leftPtr = 0;
    let rightPtr = strNum.length - 1;

    while (leftPtr < rightPtr) {
        if (strNum[leftPtr] === strNum[rightPtr]) {
            rightPtr -= 1;
            leftPtr += 1;
            continue;
        } else {
            return false
        }
    }
    return true;
};
