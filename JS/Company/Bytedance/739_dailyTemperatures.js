/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    let res = new Array(n).fill(0);
    let monoStk = [];

    for (let i = 0; i < n; i++) {
        let ele = temperatures[i];
        // DESC MONO Stack
        while (monoStk.length !== 0 && ele > temperatures[monoStk[monoStk.length - 1]]) {
            let topIdx = monoStk.pop();
            res[topIdx] = i - topIdx;
        }
        monoStk.push(i);
    }
    return res;
};
