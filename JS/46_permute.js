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
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * TestCase: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Explanation:
 * *****************************************************************/
 var dfs = (nums, len, depth, path, used, res) => {
    if (depth === len) {
        res.push(Array.from(path));
        return;
    }

    for (let i = 0; i < len; i++) {
        if (used[i]) {
            continue;
        }
        path.push(nums[i]);
        used[i] = true; // same branch
        dfs(nums, len, depth+1, path, used, res); // +1 recur next level
        path.pop(); // backtracking
        used[i] = false; // backtracking
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length;

    if (len === 0) {
        return res;
    }

    let path = []; // Stack
    let used = new Array(len).fill(false);
    res = [];
    dfs(nums, len, 0, path, used, res);
    return res;
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

