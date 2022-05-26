/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let res = nums.length;

    while (left <= right) {
        let mid = ~~((left + right) / 2);

        if (nums[mid] >= target) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
