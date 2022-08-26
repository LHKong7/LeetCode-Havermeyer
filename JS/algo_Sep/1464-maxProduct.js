/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Number.MIN_SAFE_INTEGER, submax = Number.MIN_SAFE_INTEGER;

    for (let num of nums) {
        if (num > max) {
            submax = max;
            max = num;
        } else if (num > submax) {
            submax = num;
        }
    }

    return (max-1) * (submax-1)
};
