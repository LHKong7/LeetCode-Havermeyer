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
