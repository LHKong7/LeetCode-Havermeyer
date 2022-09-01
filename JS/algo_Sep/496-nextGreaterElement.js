/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashStore = new Map();
    const stack = [];

    for (let i = nums2.length-1; i >= 0; i--) {
        while (stack.length && stack[stack.length-1] <= nums2[i]) {
            stack.pop();
        }

        hashStore.set(nums2[i], stack.length ? stack[stack.length-1] : -1);
        stack.push(nums2[i]);
    }

    const res = new Array(nums1.length).fill(0).map((_, idx) => hashStore.get(nums1[idx]));

    return res;
};
