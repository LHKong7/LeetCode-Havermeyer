/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [left, right] = newInterval;
    let placed = false;
    let res = [];

    for (let [leftLow, rightHigh] of intervals) {
        if (leftLow > right) {
            if (!placed) {
                res.push([left, right]);
                placed = true;
            }
            res.push([leftLow, rightHigh]);
        } else if (rightHigh < left) {
            res.push([leftLow, rightHigh]);
        } else {
            left = Math.min(left, leftLow);
            right = Math.max(right, rightHigh);
        }
    }

    if (!placed) {
        res.push([left, right]);
    }

    return res;
};

let res = insert(
    [[1,3],[6,9]],
    [2,5]
)
console.log("res of insert new Intervals: ", res);
