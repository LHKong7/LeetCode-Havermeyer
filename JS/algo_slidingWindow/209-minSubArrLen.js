/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let leftPtr = 0, rightPtr = 0;
    const n = nums.length;
    let res = Number.MAX_SAFE_INTEGER, windowSum = 0;

    while (rightPtr < n) {
        windowSum += nums[rightPtr];

        while (windowSum >= target) {
            res = Math.min(res, rightPtr - leftPtr + 1);
            windowSum -= nums[leftPtr];
            leftPtr++;
        }
        rightPtr++;
    }

    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    const firstGETargetEl = (nums, target) => {
        if (nums === null || nums.length === 0) return -1;
    
        let left = 0; right = nums.length - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
    
            if (target <= nums[mid]) {
                if (mid === 0 || nums[mid-1] < target) return mid;
                else right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    
    let prefixSum = new Array(nums.length + 1).fill(0);

    for (let i = 1; i <= nums.length; i++) prefixSum[i] = prefixSum[i-1] + nums[i-1];

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < prefixSum.length; i++) {
        let t = target + prefixSum[i-1];
        let j = firstGETargetEl(prefixSum, t);
        if (j < 0) continue;
        if (j <= nums.length) res = Math.min(res, j - i + 1);
    }

    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};
