/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [], path = [];
    if (candidates === null || candidates.length === 0) return res;

    const dfs = (target, startIdx, route, res) => {
        if (target < 0) return;
        if (target === 0) {
            res.push(Array.from(route));
            return;
        }

        for (let i = startIdx; i < candidates.length; i++) {
            route.push(candidates[i]);
            dfs(target-candidates[i], i, route, res);
            route.pop();
        }
    }

    dfs(target, 0, path, res);
    return res;
};

const candidates = [2,3,6,7], target = 7;
let res = combinationSum(candidates, target);
for (num of res) {
    console.log(num.toString());
}
