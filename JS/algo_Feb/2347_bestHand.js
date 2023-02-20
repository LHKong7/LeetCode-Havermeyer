/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const suitSet = new Set();

    for (const suit of suits) {
        suitSet.add(suit);
    }

    if (suitSet.size === 1) return 'Flush';

    const hashStore = new Map();
    for (const rank of ranks) {
        hashStore.set(rank, (hashStore.get(rank) || 0) + 1);
    }

    if (hashStore.size === 5) return 'High Card';

    for (const val of hashStore.values()) {
        if (val > 2) return 'Three of a Kind';
    }

    return 'Pair';
};
