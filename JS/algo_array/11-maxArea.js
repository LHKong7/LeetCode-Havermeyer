/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let leftPtr = 0, rightPtr = height.length - 1;

    while (leftPtr < rightPtr) {
        let maxArea = Math.min(height[leftPtr], height[rightPtr]) * (rightPtr-leftPtr);
        res = Math.max(res, maxArea);

        if (height[leftPtr] < height[rightPtr]) {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }

    return res;
};
