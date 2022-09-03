/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain_dp = function(pairs) {
    const n = pairs.length;
    pairs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }

    return dp[n-1];
};

var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[0] - b[0]);
    const arr = [];
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
    };

    for (const p of pairs) {
        let x = p[0], y = p[1];
        if (arr.length === 0 || x > arr[arr.length - 1]) {
            arr.push(y);
        } else {
            const idx = binarySearch(arr, x);
            arr[idx] =  Math.min(arr[idx], y);
        }
    }
    return arr.length;
}

var findLongestChain_greedy = function(pairs) {
    let curr = -Number.MAX_VALUE, res = 0;
    pairs.sort((a, b) => a[1] - b[1]);
    for (const p of pairs) {
        if (curr < p[0]) {
            curr = p[1];
            res++;
        }
    }
    return res;
}

