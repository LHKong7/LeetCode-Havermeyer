/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x0 = coordinates[0][0], y0 = coordinates[0][1];
    let deltaY = coordinates[1][1] - y0;
    let deltaX = coordinates[1][0] - x0;

    for (let i = 2; i < coordinates.length; i++) {
        let deltaYI = coordinates[i][1] - y0;
        let deltaXI = coordinates[i][0] - x0;

        if (deltaY * deltaXI !== deltaYI * deltaX) return false;
    }

    return true;
};
