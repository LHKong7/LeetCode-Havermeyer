/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    const n = nums.length;
    size = Math.floor(Math.sqrt(n));
    this.sum = new Array(Math.floor((n + size - 1) / size)).fill(0); // n/size 向上取整
    for (let i = 0; i < n; i++) {
        this.sum[Math.floor(i / size)] += nums[i];
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.sum[Math.floor(index / size)] += val - this.nums[index];
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const b1 = Math.floor(left / size), i1 = left % size, b2 = Math.floor(right / size), i2 = right % size;
    if (b1 === b2) { // 区间 [left, right] 在同一块中
        let sum = 0;
        for (let j = i1; j <= i2; j++) {
            sum += this.nums[b1 * size + j];
        }
        return sum;
    }
    let sum1 = 0;
    for (let j = i1; j < size; j++) {
        sum1 += this.nums[b1 * size + j];
    }
    let sum2 = 0;
    for (let j = 0; j <= i2; j++) {
        sum2 += this.nums[b2 * size + j];
    }
    let sum3 = 0;
    for (let j = b1 + 1; j < b2; j++) {
        sum3 += this.sum[j];
    }
    return sum1 + sum2 + sum3;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

