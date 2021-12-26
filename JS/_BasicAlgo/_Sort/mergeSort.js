/**
 * @charset: UTF-8
 * @Date: 10/24/2021
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *  to efficiently sort a given list of elements
 *      Using:
 *              recursive function concept with divide and conquer strategy
 *
 * TestCase: [5, 2, 4, 3, 1]
 * Output: [1, 2, 3, 4, 5]
 * Explanation: 
 *         create a function that merges two arrays. Obviously, this function
 *            will accept two arrays, and it needs to sort the two arrays
 *            correctly starting from the smallest element.
 *  
 *  The time complexity is O(nlogn)
 *      space complexity is O(N)
 * *****************************************************************/
function _merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    while (left.length) {
        sortedArr.push(left.shift())
    }

    while (right.length) {
        sortedArr.push(right.shift())
    }

    // use spread operator and create a new array, combining the three arrays
    return sortedArr;
}

function mergeSort(arr) {
    const half = arr.length / 2;

    if (arr.length <= 1) {
        return arr;
    }

    const left = arr.splice(0, half);
    const right = arr;

    return _merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5, 2, 4, 3, 1]));


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

