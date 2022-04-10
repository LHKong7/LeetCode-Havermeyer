/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const n = numbers.length;

    let leftPtr = 0,  rightPtr = n - 1;
    while (leftPtr < rightPtr) {
        let sum = numbers[leftPtr] + numbers[rightPtr];

        if (sum === target) {
            return [leftPtr+1, rightPtr+1];
        } else if (sum < target) {
            leftPtr += 1;
        } else {
            rightPtr -= 1;
        }
    }

    return [-1, -1];
};

