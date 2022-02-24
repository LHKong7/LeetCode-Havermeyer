/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (res[res.length-1][1] >= intervals[i][1]) {
            let ele = res.pop();
            let newInterval = [ele[0], ele[1]];
            res.push(newInterval)
        } else if (res[res.length-1][1] >= intervals[i][0]) {
            let ele = res.pop();
            let newInterval = [ele[0], intervals[i][1]];
            res.push(newInterval)
        } else {
            res.push(intervals[i]);
        }
    }

    return res;
};


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

