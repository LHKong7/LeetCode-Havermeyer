/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let leftPtr = 0, rightPtr = arr.length - 2;
    let res = 0;

    while (leftPtr <= rightPtr) {
        const mid = Math.floor((leftPtr + rightPtr) / 2);
        
        if (arr[mid + 1] < arr[mid]) {
            res = mid;
            rightPtr = mid - 1
        } else {
            leftPtr = mid + 1
        }
    }

    return res;
};
