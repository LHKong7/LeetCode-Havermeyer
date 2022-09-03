/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (!numbers || !numbers.length) return [];

    let leftPtr = 0, rightPtr = numbers.length-1;
    while (leftPtr < rightPtr) {
        let sum = numbers[leftPtr] + numbers[rightPtr];

        if (sum === target) return [leftPtr+1, rightPtr+1];
        if (sum < target) leftPtr++;
        else rightPtr--;
    }

    return [];
};
