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
 * 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。
 *          请你找出所有出现 两次 的整数，并以数组形式返回。
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates_HASH = function(nums) {
    const n = nums.length;
    const mySet = new Set();
    const res = [];

    for (let i = 0; i < n; i++) {
        if (mySet.has(nums[i])) {
            res.push(nums[i]);
        }
        mySet.add(nums[i]);
    }

    return res;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates_SPACEREDUCE = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let idx = (nums[i] - 1) % n;
        nums[idx] += n;
    }

    let res = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > (2 * n)) {
            res.push(i+1);
        }
    }

    return res;
};

const nums = [4,3,2,7,8,2,3,1];



/**
 * @Idea: 
 *      traverse the number array, for each NUMBER, find the proper index value (idx = (nums[i] - 1) % n)
 *      change the nums[idx] by adding n
 *      Traverse the array, if Element > 2n, it is duplicate value
 * @Solution:
 * @DataStructure:
 */

