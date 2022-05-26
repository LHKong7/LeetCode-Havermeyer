/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let hashStore = new Set();
    let res = 0;

    for (let i = 0; i < jewels.length; i++) {
        if (!hashStore.has(jewels[i])) hashStore.add(jewels[i]);
    };

    for (let i = 0; i < stones.length; i++) {
        if (hashStore.has(stones[i])) res++;
    };

    return res;
};
