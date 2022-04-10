/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    let count = 0;

    for (let start = 0; count < n; start++) {
        let curr = start;
        let prevEle = nums[start];

        // 循环替换
        do {
            let next = (curr + k) % n;
            let temp = nums[next];
            nums[next] = prevEle;
            prevEle = temp;

            curr = next;
            count += 1;
        } while (start != curr)
    }
};

