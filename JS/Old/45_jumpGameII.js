/**
 * @param {number[]} nums
 * @return {number}
 */
var jumpDFS = function(nums) {
    if (nums.length === 1) return 0;
    let minSteps = Number.MAX_SAFE_INTEGER;
    let path = [];

    const dfs = (nums, jumpedIdx, path) => {
        if (jumpedIdx === nums.length - 1) {
            minSteps = Math.min(minSteps, path.length);
            return;
        }

        for (let i = 1; i <= nums[jumpedIdx]; i++) {
            if (jumpedIdx + i >= nums.length) continue; // 剪枝
            path.push(i);
            dfs(nums, jumpedIdx + i, path);
            path.pop(); // backTracking
        }
    }
    dfs(nums, 0, path);

    return minSteps === Number.MAX_SAFE_INTEGER ? 0 : minSteps;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jumpBFS = function(nums) {
    if (nums.length === 1) return 0;
    let queue = [];
    queue.push(0);
    let level = 0;

    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let jumpedIdx = queue.shift();
            if (jumpedIdx === nums.length - 1) return level;
            for (let j = 1; j <= nums[jumpedIdx]; j++) {
                queue.push(jumpedIdx + j);
            }
        }
        level++;
    }

    return 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jumpGREEDYBAD = function(nums) {
    if (nums.length === 1) return 0;
    let steps = 0; 
    let start = 0, end = 0;

    while (end < nums.length - 1) { // reach last idx
        let maxPos = 0;
        for (let i = start; start <= end; i++) {
            maxPos = Math.max(maxPos, i + nums[i]);
        }
        start = end + 1;
        end = maxPos;
        steps++;
    }

    return steps;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) return 0;
    let steps = 0; 
    let maxPos = 0, end = 0;

    for (let i = 0; i < nums.length-1; i++) {
        maxPos = Math.max(maxPos, i + nums[i]);
        if (i === end) {
            steps++;
            end = maxPos;
        }
    }

    return steps;
};
