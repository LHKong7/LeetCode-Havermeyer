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
function median(values) {
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays_bruteForce = function(nums1, nums2) {
    let values = nums1.concat(nums2);
    values.sort((a, b) => a - b);
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays_mergeSort = function(nums1, nums2) {
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

