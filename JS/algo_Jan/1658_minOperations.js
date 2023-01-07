/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const n = nums.length, sum = _.sum(nums);

    if (sum < x) {
        return -1;
    }

    let right = 0;
    let lsum = 0, rsum = sum;
    let res = n + 1;

    for (let left = -1; left < n; left++) {
        if (left != -1) {
            lsum += nums[left];
        }

        while (right < n && lsum + rsum > x) {
            rsum -= nums[right];
            right++;
        }

        if (lsum + rsum === x) {
            res = Math.min(res, (left + 1) + (n - right))
        }
    }

    return res > n ? -1 : res;
};
