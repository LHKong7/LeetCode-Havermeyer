/*
 * 找到尽量靠右的 【较小数】
 * 找到尽量靠右比 【较小数】 大的 【较大数】
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    const n = nums.length;

    // 找到尽量靠右的 【较小数】
    let i = n - 2;    
    while (i >= 0 && nums[i] >= nums[i + 1]) i--; // i Pointer to 【较小数】
    if (i >= 0) { // find the【较小数】
        // find 【较大数】
        let j = n - 1; 
        while (j >= 0 && nums[i] >= nums[j]) j--

        // swap i idx element and j idx element
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // swap 较小数 i 之后的所有元素
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
};
