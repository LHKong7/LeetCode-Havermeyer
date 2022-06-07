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
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const stack = []; // record index
    const res = new Array(n);

    for (let i = 0; i < n; i++) {
        const temperature = temperatures[i];
        while (stack.length && temperature > temperatures[stack[stack.length-1]]) {
            let prevIdx = stack.pop();
            res[prevIdx] = i - prevIdx;
        }

        stack.push(i);
    }
    while (stack.length) {
        let idx = stack.pop();
        res[idx] = 0;
    }
    return res;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (temperatures.length === 1) return [];
    const monoStk = [];
    const res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        let curr = temperatures[i];

        while (monoStk.length && temperatures[monoStk[monoStk.length - 1]] < curr) {
            let prevIdx = monoStk.pop();

            res[prevIdx] = i - prevIdx;
        }
        monoStk.push(i);
    }

    return res;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

