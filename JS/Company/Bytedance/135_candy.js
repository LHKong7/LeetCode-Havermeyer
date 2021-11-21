/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description: 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
 *          你需要按照以下要求，帮助老师给这些孩子分发糖果：
 *                  每个孩子至少分配到 1 个糖果。  
 *                  评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。
 *                  那么这样下来，老师至少需要准备多少颗糖果呢？
 *
 *
 * TestCase: [1,0,2]
 * Output: 5
 * Explanation: 你可以分别给这三个孩子分发 2、1、2 颗糖果。
 * *****************************************************************/

 var candy = function(ratings) {
    const n = ratings.length;
    const left = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    let right = 0, ret = 0;
    for (let i = n - 1; i > -1; i--) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            right = 1;
        }
        ret += Math.max(left[i], right);
    }
    return ret;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */
