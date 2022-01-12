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

const merge = (left, right) => {
  let resArr = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      resArr.push(left[i]);
      i += 1;
    } else {
      resArr.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    resArr.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    resArr.push(right[j]);
    j += 1;
  }

  return resArr;
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const data = [34, 33, 12, 78, 21, 1, 98, 100];
let res = mergeSort(data);
console.log(res)


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

