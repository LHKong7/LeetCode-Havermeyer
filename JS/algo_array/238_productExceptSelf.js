/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    
    let leftProducts = new Array(n).fill(0);
    leftProducts[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i-1] * nums[i - 1];
    }

    let rightProducts = new Array(n).fill(0);
    rightProducts[n-1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    let output = new Array(n);
    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }

    return output;
};
