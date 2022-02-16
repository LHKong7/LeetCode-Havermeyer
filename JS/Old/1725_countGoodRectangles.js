/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let res = 0, maxLen = 0;

    for (const rec of rectangles) {
        let length = rec[0], width = rec[1];
        let lenSide = Math.min(length, width);

        if (lenSide === maxLen) {
            res += 1;
        }

        if (lenSide > maxLen) {
            res = 1;
            maxLen = lenSide;
        }
    }

    return res;
};
