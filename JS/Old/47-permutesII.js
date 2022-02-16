// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let res = [];
    let route = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let visited = new Array(n).fill(false);

    // backTracking
    const dfs = (arr, path, res, used) => {
        if (path.length === n) {
            res.push(Array.from(path));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i] || (i > 0 && arr[i] == arr[i-1] && !used[i-1])) continue;
            path.push(arr[i]);
            used[i] = true;
            dfs(arr, path, res, used);
            // when backtracking remove from the path
            path.pop();
            used[i] = false; // when delete an element, change to false to indicate the element is not traverse
        }
    }

    dfs(nums, route, res, visited);
    return res;
};

const nums = [1,1,2];
let res = permuteUnique(nums);
for (num of res) {
    console.log(num.toString());
}
