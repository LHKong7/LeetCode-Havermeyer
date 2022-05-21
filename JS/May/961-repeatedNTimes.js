/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const hashStore = new Set();

    for (let num of nums) {
        if (hashStore.has(num)) return num;
        else hashStore.add(num);
    }

    return -1;
};
