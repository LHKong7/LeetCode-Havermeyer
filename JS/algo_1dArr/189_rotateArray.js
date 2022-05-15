/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    let newArr = new Array(n).fill(0);
    let rotateK = k % n;

    for (let i = 0; i < n; i++) {
        let newIdx = (i + rotateK) % n;
        newArr[newIdx] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i];
    }
};

// 环状替换
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const n = nums.length;
    let rotateK = k % n;
    let count = 0;

    for (let start = 0; count < n; start++) {
        let curr = start;

        do {
            let next = (curr + rotateK) % n;
            [nums[next], nums[start]] = [nums[start], nums[next]];

            curr = next;
            count++;
        } while (start != curr);
    }
};

// reverse the Array three Time: 1. reverse the whole array 2. reverse [0, k-1] 3. reverse [k, n-1]
var reverseArray = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start += 1;
        end -= 1;
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    reverseArray(nums, 0, nums.length - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, nums.length - 1);
};
