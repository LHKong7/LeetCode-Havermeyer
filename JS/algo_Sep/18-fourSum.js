/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums === null || nums.length < 4) return [];
    const res = [], n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n-3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;

        for (let j = i+1; j < n-2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) continue;

            let leftPtr = j+1, rightPtr = n-1;
            while (leftPtr < rightPtr) {
                const sum = nums[i] + nums[j] + nums[leftPtr] + nums[rightPtr];
                if (sum === target) {
                    res.push([ nums[i], nums[j], nums[leftPtr], nums[rightPtr] ]);

                    while (leftPtr < rightPtr && nums[leftPtr] === nums[leftPtr+1]) leftPtr++;
                    while (leftPtr < rightPtr && nums[rightPtr] === nums[rightPtr-1]) rightPtr--;

                    leftPtr++;
                    rightPtr--;
                } else if (sum > target) {
                    rightPtr--;
                } else {
                    leftPtr++;
                }
            }
        }
    }

    return res;
};
