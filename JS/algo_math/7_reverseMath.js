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
//  ~~ 是相当于取整，并不是完全和 floor 一样 负数用Math.floor（）得到的结果不是我们想要的
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = Math.pow(-2, 31);
    let res = 0;

    while (x != 0) {
        let digital = x % 10;
        x = ~~(x / 10);

        if (res > ~~(MAX_INT/10) || ((res == MAX_INT && digital > 7))) {
            return 0;
        }

        if (res < ~~(MIN_INT/10) || ((res == MIN_INT && digital < -8))) {
            return 0;
        }

        res = res * 10 + digital;
    }

    return x >= 0 ? res: -res;
};

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

