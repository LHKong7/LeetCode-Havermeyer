/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    const newNums = new Array(Math.floor(n / 2)).fill(0);
    for (let i = 0; i < newNums.length; i++) {
        if (i % 2 === 0) {
            newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        } else {
            newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        }
    }
    return minMaxGame(newNums);
};
