/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (s === null || s.length === 0) return 0;

    let res = 0;
    const isPalindrome = (s) => {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s.charAt(i) !== s.charAt(j)) return false;
            i++;
            j--;
        }

        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let subStr = s.substring(i, j+1);
            if (isPalindrome(subStr)) res += 1;
        }
    }

    return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings_DP = function(s) {
    let dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        res++;
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
            if (dp[i][j]) res++;
        }
    }

    return res;
};
