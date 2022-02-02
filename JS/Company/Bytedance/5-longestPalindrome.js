/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s === null || s.length === 0) return '';
    if (s.length === 1) return s;
    let dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    let res = s.charAt(0) + '';

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }

    // state mutation
    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            let charEquality = s.charAt(i) === s.charAt(j);
            if (j - i === 1) { // only two char
                dp[i][j] = charEquality;
            } else { // larger than two char
                dp[i][j] = charEquality && dp[i+1][j-1];
            }
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }

    return res;
};
