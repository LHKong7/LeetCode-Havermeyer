/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (numbers === null || numbers.length === 0) return [];

    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) return [left+1, right+1];
        else if (sum < target) left++;
        else right--;
    }

    return [];
};