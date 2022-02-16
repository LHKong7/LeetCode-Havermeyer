/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word1.length * word2.length === 0) return word1.length + word2.length;
    let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length+1).fill(0));
    for (let i = 0; i <= word1.length; i++) { // first Row
        dp[i][0] = i;
    }

    for (let j = 0; j <= word2.length; j++) { // first Column
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1.charAt(i-1) === word2.charAt(j-1)) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                let insertNum = 1 + dp[i][j-1];
                let deleteNum = 1 + dp[i-1][j];
                let replaceNum = 1 + dp[i-1][j-1];
                dp[i][j] = Math.min(insertNum, Math.min(deleteNum, replaceNum));
            }
        }
    }

    return dp[word1.length][word2.length];
};
