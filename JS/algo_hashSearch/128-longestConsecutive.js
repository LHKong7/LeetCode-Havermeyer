/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let hashStore = new Set();

    for (const num of nums) {
        hashStore.add(num);
    }

    let longestStreak = 0;
    for (const num of hashStore) {
        if (!hashStore.has(num - 1)) {
            let currNum = num, currentStreak = 1;

            while (hashStore.has(currNum + 1)) {
                currNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
