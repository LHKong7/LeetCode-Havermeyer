/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let myMap = new Map();
    for (let num of nums) {
        myMap.set(num, myMap.has(num) ? myMap.get(num)+1 : 1);
    }

    let res = 0;
    for ([k, v] of myMap) {
        if (v === 1) {
            res += k;
        }
    }

    return res;
};


