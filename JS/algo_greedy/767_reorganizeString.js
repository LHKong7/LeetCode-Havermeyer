/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
    const n = s.length
    // 1. 统计每个字符出现的次数
    const count = new Array(26).fill(0)
    for (const c of s) {
        const index = c.charCodeAt() - 'a'.charCodeAt()
        count[index]++
        if (count[index] > Math.floor((n + 1) / 2)) return ""
    }

    // 2. 拿到出现次数最多的字符
    let maxCountIndex = 0
    for (let i = 0; i < 26; i++) {
        if (count[i] > count[maxCountIndex]) {
            maxCountIndex = i
        }
    }

    // 3. 先将出现次数最多的字符放在偶数索引上
    res = new Array(n).fill('')
    let idx = 0;
    while (count[maxCountIndex] > 0) {
        res[idx] = String.fromCharCode(maxCountIndex + 'a'.charCodeAt())
        idx += 2
        count[maxCountIndex]--
    }

    // 4. 将其他的字符放到其他的位置
    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (idx >= n) idx = 1
            res[idx] = String.fromCharCode(i + 'a'.charCodeAt())
            idx += 2
            count[i]--
        }
    }

    return res.join("")
};

/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
    const getCharIdx = (c) => c.charCodeAt() - 'a'.charCodeAt();
    const convertTochar = (c) => String.fromCharCode(c + 'a'.charCodeAt());

    const n = s.length;
    const count = new Array(26).fill(0);

    for (let char of s) {
        let idx = getCharIdx(char);
        count[idx] += 1;
        if (count[idx] > Math.floor((n+1) / 2)) return '';
    }

    let maxCountIdx = 0;
    for (let i = 0; i < 26; i++) {
        if (count[i] > count[maxCountIdx]) {
            maxCountIdx = i;
        }
    }

    res = new Array(n).fill('');
    let idx = 0;
    while (count[maxCountIdx] > 0) {
        res[idx] = convertTochar(maxCountIdx);
        idx += 2;
        count[maxCountIdx]--;
    }

    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (idx >= n) idx = 1;
            res[idx] = convertTochar(i);
            idx += 2;
            count[i]--;
        }
    }

    return res.join("");
};
