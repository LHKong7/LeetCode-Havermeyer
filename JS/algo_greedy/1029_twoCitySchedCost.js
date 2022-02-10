/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {
    costs.sort((x, y) => x[0] - x[1] - (y[0] - y[1]));

    let total = 0
    const n = Math.floor(costs.length / 2)
    for (let i = 0; i < n; i++) {
        total += costs[i][0] + costs[i + n][1]
    }
    return total
};
