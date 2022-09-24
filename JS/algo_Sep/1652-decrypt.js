/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;

    if (k === 0) return new Array(n).fill(0);
    let res = new Array(n).fill(0);
    let newCode = new Array(n * 2).fill(0).map((_, idx) => code[idx % n]);
    let leftPtr = k > 0 ? 1 : n + k, rightPtr = k > 0 ? k : n - 1;
    let sumNum = 0;
    for (let i = leftPtr; i <= rightPtr; i++) {
        sumNum += newCode[i];
    }

    for (let i = 0; i < n; i++) {
        res[i] = sumNum;
        sumNum -= newCode[leftPtr];
        sumNum += newCode[rightPtr+1];
        leftPtr++, rightPtr++;
    }

    return res;
};
