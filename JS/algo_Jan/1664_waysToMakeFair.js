/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    let odd1 = 0, even1 = 0;
    let odd2 = 0, even2 = 0;
    for (let i = 0; i < nums.length; ++i) {
        if ((i & 1) !== 0) {
            odd2 += nums[i];
        } else {
            even2 += nums[i];
        }
    }
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if ((i & 1) !== 0) {
            odd2 -= nums[i]
        } else {
            even2 -= nums[i]
        }

        if (odd1 + even2 === odd2 + even1) {
            res += 1;
        }

        if ((i & 1) !== 0) {
            odd1 += nums[i]
        } else {
            even1 += nums[i]
        }
    }

    return res;
};

const nums = [2,1,6,4]
const res = waysToMakeFair(nums)

// 时间复杂度：O(n)
// 空间复杂度：O(1)
