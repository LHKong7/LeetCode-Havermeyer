/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            count += 1;
            if (count > 1) return false;
            if (i - 2 >= 0 && nums[i] < nums[i-2]) {
                nums[i] = nums[i - 1];
            } else {
                nums[i - 1] = nums[i];
            }
        }
    }
    return true;
};
