/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    let res = 0;

    for (let left = 0; left < heights.length; left++) {
        let minHeight = heights[left];

        for (let right = left; right < heights.length; right++) {
            minHeight = Math.min(minHeight, heights[right]);

            let currWidth = right - left + 1;
            res = Math.max(res, currWidth*minHeight);
        }
    }

    return res;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    let res = 0;
    const n = heights.length;

    for (let i = 0; i < n; i++) {
        let currHeight = heights[i];

        let left = i, right = i;
        while (left >= 0 && heights[left] >= currHeight) left--;
        while (right < n && heights[right] >= currHeight) right++;

        res = Math.max(res, (currHeight * (right - left - 1)))
    }

    return res;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = 0;
    const n = heights.length;
    let left = new Array(n).fill(-1), right = new Array(n).fill(n);

    let leftMonoStk = [];
    for (let i = n-1; i >= 0; i--) { // find the first left smaller "height"
        let currH = heights[i];

        while (leftMonoStk.length !== 0 && currH < heights[leftMonoStk[leftMonoStk.length - 1]]) {
            let prevIdx = leftMonoStk.pop();

            left[prevIdx] = i;
        }

        leftMonoStk.push(i);
    }

    // right
    rightMonoStk = [];
    for (let i = 0; i <= n-1; i++) { // find the right first smaller "height"
        let currH = heights[i];

        while (rightMonoStk.length !== 0 && currH < heights[rightMonoStk[rightMonoStk.length - 1]]) {
            let prevIdx = rightMonoStk.pop();

            right[prevIdx] = i;
        }

        rightMonoStk.push(i);
    }

    for (let i = 0; i < n; i++) { // O(n)
        let currHeight = heights[i];
        res = Math.max(res, (currHeight * (right[i] - left[i] - 1)))
    }

    return res;
};
