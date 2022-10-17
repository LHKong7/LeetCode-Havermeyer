/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const n = fruits.length;
    const cnt = new Map();

    let res = 0;
    let leftPtr = 0, rightPtr = 0;
    while (rightPtr < n) {
        cnt.set(fruits[rightPtr], (cnt.get(fruits[rightPtr]) || 0) + 1);

        while (cnt.size > 2) {
            cnt.set(fruits[leftPtr], cnt.get(fruits[leftPtr]) - 1);
            if (cnt.get(fruits[leftPtr]) == 0) {
                cnt.delete(fruits[leftPtr]);
            }
            leftPtr++;
        }
        res = Math.max(res, rightPtr - leftPtr + 1);
        rightPtr++;
    }
    return res;
};
