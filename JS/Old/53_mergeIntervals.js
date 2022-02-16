/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        if (res.length === 0) {
            res.push(intervals[i]);
        } else {
            let currLast = res[res.length-1];
            if (currLast[1] >= intervals[i][0]) { // merge Intervals
                currLast[1] = Math.max(currLast[1], intervals[i][1]);
            } else {
                res.push(intervals[i]);
            }
        }
    }
    return res;
};
