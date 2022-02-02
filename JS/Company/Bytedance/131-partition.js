/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function (s) {
    const res = []; 
    dfs(res, [], s, 0); 	
    return res;
};

var dfs = function(res, temp, s, start) { 
    if (start == s.length) {
        res.push(temp.slice());
        return;
    }
    for (let i = start; i < s.length; i++) {
        if (isPalindrome(s, start, i)) {
            temp.push(s.substring(start, i + 1));
            dfs(res, temp, s, i + 1);
            temp.pop();
        }
    }
}

var isPalindrome = (s, leftPtr, rightPtr) => {
    while (leftPtr < rightPtr) {
        if (s[leftPtr] !== s[rightPtr]) {
            return false;
        }
        leftPtr += 1;
        rightPtr -= 1;
    }

    return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition_DP = function (s) {

    const len = s.length

    // 定义状态，dp[i][j] 表示子数组区间 [i, j] 对应的子串是否是回文
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
    // 状态初始化
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    // 状态转移
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            // [i, j]
            const isCharEqual = s[i] == s[j]
            if (j - i == 1) { // 只有两个字符
                dp[i][j] = isCharEqual
            } else  { // 大于两个字符
                dp[i][j] = isCharEqual && dp[i + 1][j - 1]
            }
        }
    }

    const res = []
    const dfs = (startIndex, path) => {
        if (startIndex == s.length) {
            res.push(path.slice())
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            if (!dp[startIndex][i]) continue
            path.push(s.substring(startIndex, i + 1))
            dfs(i + 1, path)
            path.pop()
        }
    }

    dfs(0, [])
    return res
}
