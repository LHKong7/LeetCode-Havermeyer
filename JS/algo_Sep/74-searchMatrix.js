/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const firstColBinarySearch = (matrix, target) => {
        let leftPtr = -1, rightPtr = matrix.length - 1;

        while (leftPtr < rightPtr) {
            let mid = leftPtr + Math.floor((rightPtr-leftPtr+1) / 2);

            if (matrix[mid][0] <= target) {
                leftPtr = mid;
            } else {
                rightPtr = mid - 1;
            }
        }

        return leftPtr;
    };

    const rowBinarySearch = (row, target) => {
        let leftPtr = 0, rightPtr = row.length - 1;

        while (leftPtr <= rightPtr) {
            let mid = leftPtr + Math.floor((rightPtr - leftPtr) / 2);

            if (row[mid] === target) {
                return true;
            } else if (row[mid] > target) {
                rightPtr = mid - 1;
            } else {
                leftPtr = mid + 1;
            }
        }

        return false;
    }

    const rowIdx = firstColBinarySearch(matrix, target);
    if (rowIdx < 0) return false;

    return rowBinarySearch(matrix[rowIdx], target);
};
