/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let hashStore = new Map();

    for (const width of wall) {
        const n = width.length;
        let sum = 0;

        for (let i = 0; i < n - 1; i++) {
            sum += width[i];
            hashStore.set(sum, (hashStore.get(sum) || 0) + 1);
        };
    }

    let res = 0;

    for (const [_, c] of hashStore.entries()) {
        res = Math.max(res, c);
    }

    return wall.length - res;
};
