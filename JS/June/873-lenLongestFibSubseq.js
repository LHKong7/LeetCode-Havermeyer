/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const indices = new Map();
    const n = arr.length;
    
    for (let i = 0; i < n; i++) indices.set(arr[i], i);

    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let res = 0;

    for (let i = 0; i < n; i++) {
        for (let j = n-1; j >= 0; j--) {
            if (arr[j] * 2 <= arr[i]) {
                break;
            }

            if (indices.has(arr[i] - arr[j])) {
                const k = indices.get(arr[i] - arr[j]);
                dp[j][i] = Math.max(dp[k][j] + 1, 3);
                res = Math.max(res, dp[j][i]);
            }
        }
    }

    return res;
};
