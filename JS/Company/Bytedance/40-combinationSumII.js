/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [], path = [];
    if (candidates === null || candidates.length === 0) return res;

    const dfs = (target, startIdx, route, res) => {
        if (target < 0) return;
        if (target === 0) {
            res.push(Array.from(route));
            return;
        }

        for (let i = startIdx; i < candidates.length; i++) {
            if (i > startIdx && candidates[i] === candidates[i-1]) continue; // cut the leaf
            route.push(candidates[i]);
            dfs(target-candidates[i], i+1, route, res); // i+1 child > parent
            route.pop();
        }
    }

    dfs(target, 0, path, res);
    return res;
};
