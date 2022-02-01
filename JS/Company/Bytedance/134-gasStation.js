/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit_BF = function(gas, cost) {
    for (let i = 0; i < gas.length; i++) {
        if (gas[i] < cost[i]) continue;
        let idx = i;
        let remainGas = gas[i] - cost[i];

        while (remainGas >= 0) {
            idx = (idx + 1) % gas.length;
            if (idx === i) return i;
            remainGas = remainGas - cost[idx] + gas[idx];
        }
    }

    return -1;
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit_greedy = function(gas, cost) {
    let n = gas.length;

    let totalGas = 0;
    let currGas = 0;
    let startStation = 0;
    for (let i = 0; i < n; i++) {
        totalGas += gas[i] - cost[i];
        currGas += gas[i] - cost[i];
        if (currGas < 0) {
            startStation = i + 1;
            currGas = 0;
        }
    }

    return totalGas >= 0 ? startStation : -1;
};

