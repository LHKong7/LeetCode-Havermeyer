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
 *  给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *      算法的时间复杂度应该为 O(log (m+n)) 。
 *
 * TestCase: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: 合并数组 = [1,2,3] ，中位数 2
 * *****************************************************************/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 const _merge = (left, right) => {
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

    return sortedArr;
};

var findMedianSortedArrays = function(nums1, nums2) {
  let values = _merge(nums1, nums2);
  let res = 0;
  var half = Math.floor(values.length / 2);

  if (values.length % 2) {
      res = values[half];
  } else {
      res = (values[half - 1] + values[half]) / 2.0;
  }

  return res;
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

