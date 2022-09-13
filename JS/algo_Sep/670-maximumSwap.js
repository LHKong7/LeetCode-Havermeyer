/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    if (num % 10 == num) return num;

    let nums = Array.from(String(num));
    for (let i = 0; i < nums.length; i++) {
        let maxIdx = i;

        for (let j = nums.length-1; j > i; j--) {
            if (nums[j] > nums[maxIdx]) {
                maxIdx = j;
            };
        }

        if (maxIdx !== i) {
            [nums[i], nums[maxIdx]] = [nums[maxIdx], nums[i]]
            return Number.parseInt(nums.join(''));
        }
    }

    return num;
};
