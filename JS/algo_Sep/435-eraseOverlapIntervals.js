/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals_dp = function(intervals) {
    if (!intervals || !intervals.length) return 0;

    const n = intervals.length;
    const dp = new Array(n).fill(1);
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }

    return n - Math.max(...dp);
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals_greedy = function(intervals) {
    if (!intervals || !intervals.length) return 0;

    const n = intervals.length;
    intervals.sort((a, b) => a[1] - b[1]);
    let right = intervals[0][1];
    let ans = 1;

    for (let i = 1; i < n; i++) {
        if (intervals[i][0] >= right) {
            ans++;
            right = intervals[i][1];
        }
    }

    return n - ans;
};
