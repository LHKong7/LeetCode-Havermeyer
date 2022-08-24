/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    return target.toString() === arr.toString();
};


var canBeEqual = function(target, arr) {
    const counts1 = new Map();
    const counts2 = new Map();
    for (const num of target) {
        counts1.set(num, (counts1.get(num) || 0) + 1);
    }
    for (const num of arr) {
        counts2.set(num, (counts2.get(num) || 0) + 1);   
    }
    if (counts1.size !== counts2.size) {
        return false;
    }
    for (const [key, value] of counts1.entries()) {
        if (!counts2.has(key) || counts2.get(key) !== value) {
            return false;
        }
    }
    return true;
};
