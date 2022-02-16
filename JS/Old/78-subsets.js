/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let path = [], res = [];
    if (nums === null || nums.length === 0) return res;

    const dfs = (nums, startIdx, subset, res) => {
        res.push(Array.from(subset)); // from root to leaf put into the res set
        for (let i = startIdx; i < nums.length; i++) {
            subset.push(nums[i]);
            dfs(nums, i+1, path, res);
            subset.pop()
        }
    }

    dfs(nums, 0, path, res);
    return res;
};