/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const n = candyType.length;
    const mySet = new Set();

    for (let candy of candyType) {
        mySet.add(candy);
    }

    return Math.min(mySet.size, n/2);
};

var distributeCandies = function(candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
};
