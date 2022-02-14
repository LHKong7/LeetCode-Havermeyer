/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    let res = 0;

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        res += 1;
    }

    for (let j = 1; j < n; j++) { // col control
        for (let i = 0; i < j; i++) { // row control
            let isCharEquals = (s[i] === s[j]);

            if (j - i === 1) { // only two chars
                dp[i][j] = isCharEquals;
            } else if (!isCharEquals) { // larger than two chars
                dp[i][j] = false;
            } else {
                dp[i][j] = dp[i+1][j-1];
            }

            if (dp[i][j]) res++;
        }
    }

    return res;
};
