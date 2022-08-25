/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    const lst = [...arr];
    lst.sort((a, b) => {
        if (Math.abs(a - x) !== Math.abs(b - x)) {
            return Math.abs(a - x) - Math.abs(b - x);
        } else {
            return a - b;
        }
    });
    const ans = lst.slice(0, k);
    ans.sort((a, b) => a - b);
    return ans;
};

var findClosestElements = function(arr, k, x) {
    let right = binarySearch(arr, x);
    let left = right - 1;
    while (k-- > 0) {
        if (left < 0) {
            right++;
        } else if (right >= arr.length) {
            left--;
        } else if (x - arr[left] <= arr[right] - x) {
            left--;
        } else {
            right++;
        }
    }
    const ans = [];
    for (let i = left + 1; i < right; i++) {
        ans.push(arr[i]);
    }
    return ans;
}

const binarySearch = (arr, x) => {
    let low = 0, high = arr.length - 1;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
