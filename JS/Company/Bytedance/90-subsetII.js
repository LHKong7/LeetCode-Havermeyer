/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let path = [], res = [];
    nums.sort((a, b) => a - b);
    if (nums === null || nums.length === 0) return res;

    const dfs = (nums, startIdx, subset, res) => {
        res.push(Array.from(subset)); // from root to leaf put into the res set
        for (let i = startIdx; i < nums.length; i++) {
            if (i > startIdx && nums[i] === nums[i-1]) continue;
            subset.push(nums[i]);
            dfs(nums, i+1, path, res);
            subset.pop()
        }
    }

    dfs(nums, 0, path, res);
    return res;
};
