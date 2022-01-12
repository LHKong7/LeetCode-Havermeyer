/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const n = nums.length;
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let idx = (nums[i] - 1) % n;
        nums[idx] += n;
        if (nums[idx] > 2*n) {
            res.push(idx + 1);
        }
    }

    return res;
};