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

var containsDuplicate_set = function(nums) {
    let mySet = new Set();

    for (const num of nums) {
        if (mySet.has(num)) {
            return true;
        }
        mySet.add(num);
    }

    return false;
};

var containsDuplicate_sort = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        }
    }

    return false;
}



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

