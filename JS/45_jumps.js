/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    if (nums.length === 1) return 0;
    let n = nums.length;
    let end = 0;
    let steps = 0;
    let maxPos = 0;


    for (let i = 0; i < n - 1; i++) {
        maxPos = Math.max(maxPos, i + nums[i]);

        if (i === end) {
            steps += 1;
            end = maxPos;
        }
    }

    return steps;
};

let nums = [2,3,1,1,4];
console.log(jump(nums));
