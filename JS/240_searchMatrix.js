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
 *  编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 *      每行的元素从左到右升序排列。
 *      每列的元素从上到下升序排列。
 *
 * TestCase: 
 *      matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
 *      target = 5
 * Output: true
 * Explanation:
 *      时间复杂度：O(mlogn)。对一行使用二分查找的时间复杂度为 O(logn)，最多需要进行 m 次二分查找。
 *      空间复杂度：O(1)
 * *****************************************************************/
var searchMatrix = function(matrix, target) {
    for (const row of matrix) {
        const index = _bSearch(row, target);

        if (index >= 0) {
            return true;
        }
    }

    return false;
}

var _bSearch = (arr, target) => {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        const middle = Math.floor((high - low) / 2) + low;
        const num = arr[middle];

        if (num == target) {
            return middle;
        } else if (num > target) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return -1;
}



/**
 * @Idea:
 *  由于矩阵 matrix 中每一行的元素都是升序排列的，
 *  因此我们可以对每一行都使用一次二分查找，判断 target 是否在该行中，
 *  从而判断 target 是否出现。
 * @Solution:
 * @DataStructure:
 */

