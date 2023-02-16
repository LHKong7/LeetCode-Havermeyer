/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let cntStore = new Map();
    let res = 0;
    for (const num of nums) {
        cntStore.set(num, !(cntStore.get(num) || false));
        if (!cntStore.get(num)) {
            res++;
        }
    }

    return [res, nums.length - 2 * res];
};
