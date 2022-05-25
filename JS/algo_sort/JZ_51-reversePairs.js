/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if (!nums || nums.length < 2) return 0;

    let temp = new Array(nums.length);

    const _reversePairs = (left, right) => {
        if (left >= right) return 0;

        let mid = ~~((left + right) / 2);
        let leftReversePairs = _reversePairs(left, mid);
        let rightReversePairs = _reversePairs(mid+1, right);

        let mergeReversePairs = _mergeAndCountReversePairs(left, mid, right);

        return leftReversePairs + rightReversePairs + mergeReversePairs;
    };

    const _mergeAndCountReversePairs = (left, mid, right) => {
        for (let i = left; i <= right; i++) {
            temp[i] = nums[i];
        }

        let count = 0;
        let i = left;
        let j = mid + 1;

        for (let k = left; k <= right; k++) {
            if (i === mid + 1) {
                nums[k] = temp[j];
                j++;
            } else if (j === right + 1) {
                nums[k] = temp[i];
                i++;
            } else if (temp[i] <= temp[j]) {
                nums[k] = temp[i];
                i++;
            } else { // temp[i] < temp[j]
                nums[k] = temp[j];
                j++;
                count += mid - i + 1;
            }
        }

        return count;
    };

    return _reversePairs(0, nums.length-1);
};
