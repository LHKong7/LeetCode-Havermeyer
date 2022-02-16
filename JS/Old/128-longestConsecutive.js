/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set();

    for (let num of nums) {
        numSet.add(num);
    }

    let longestStreak = 0;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currNum = num;
            let currentStreak = 1;

            while (numSet.has(currNum + 1)) {
                currNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
