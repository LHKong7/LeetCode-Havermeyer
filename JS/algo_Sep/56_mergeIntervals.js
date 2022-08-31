/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];

    intervals.sort((a, b) => {
        return a[0] - b[0];
    })

    for (let i = 0; i < intervals.length; i++) {
        if (!res[res.length-1] || res[res.length-1][1] < intervals[i][0]) {
            res.push(intervals[i]);
        } else {
            res[res.length-1][1] = Math.max(res[res.length-1][1], intervals[i][1]);
        }
    }

    return res;
};
