const allPermute = function(nums) {
    let res = [];
    let route = [];
    let n = nums.length;

    const dfs = (arr, path, res) => {
        if (path.length === n) {
            res.push(Array.from(path));
            return;
        }

        for (let i = 0; i < n; i++) {
            path.push(arr[i]); 
            dfs(arr, path, res);
            // when backtracking remove from the path
            path.pop();
        }
    }

    dfs(nums, route, res);
    return res;
}

// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// Time Complexity: DFS -> O(n^2) N个元素有 N! （N的阶层） => O(n * n!)
var permute = function(nums) {
    let res = [];
    let route = [];
    let n = nums.length;
    let visited = new Array(n).fill(false);

    // backTracking
    const dfs = (arr, path, res, used) => {
        if (path.length === n) {
            res.push(Array.from(path));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
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
}

const nums = [1,2,3];
let res = permute(nums);
for (num of res) {
    console.log(num.toString());
}
