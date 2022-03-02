/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/

// take the digital: x % 10, take of digital: x = x / 10
const reverseNumber = (num) => {
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = Math.pow(-2, 31);
    let res = 0;

    while (num != 0) {
        let digital = num % 10;
        num = Math.floor(num / 10);

        if (res > (maxInt/10) || ((res == maxInt) || digital > 7)) {
            return 0
        }

        if (res < (minInt/10) || ((res == minInt) || digital < -8)) {
            return 0
        }
        res = res * 10 + digital;
    }

    return x > 0 ? res : -res
}

var reverse_EASY = function(x) {
    const boundry = x > 0 ? 2147483647 : 2147483648
    let y = Math.abs(x)
    let res = 0
    while (y != 0) {
        res = res * 10 + y % 10;
        if (res > boundry) return 0
        y = Math.floor(y / 10)
    }
    return x > 0 ? res : -res
};

let x = -123;
let res = reverseNumber(x);
console.log(res)

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

