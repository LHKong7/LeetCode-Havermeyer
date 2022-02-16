var longestSubstring = function(s, k) {
    const n = s.length;
    return dfs(s, 0, n - 1, k);
}

const dfs = (s, l, r, k) => {
    const cnt = new Array(26).fill(0);
    for (let i = l; i <= r; i++) {
        cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let split = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] > 0 && cnt[i] < k) {
            split = String.fromCharCode(i + 'a'.charCodeAt());
            break;
        }
    }
    if (split == 0) {
        return r - l + 1;
    }

    let i = l;
    let ret = 0;
    while (i <= r) {
        while (i <= r && s[i] === split) {
            i++;
        }
        if (i > r) {
            break;
        }
        let start = i;
        while (i <= r && s[i] !== split) {
            i++;
        }

        const length = dfs(s, start, i - 1, k);
        ret = Math.max(ret, length);
    }
    return ret;
};

var longestSubstringslidingWindow = function(s, k) {
    let ret = 0;
    const n = s.length;
    for (let t = 1; t <= 26; t++) {
        let l = 0, r = 0;
        const cnt = new Array(26).fill(0);
        let tot = 0;
        let less = 0;
        while (r < n) {
            cnt[s[r].charCodeAt() - 'a'.charCodeAt()]++;
            if (cnt[s[r].charCodeAt() - 'a'.charCodeAt()] === 1) {
                tot++;
                less++;
            }
            if (cnt[s[r].charCodeAt() - 'a'.charCodeAt()] === k) {
                less--;
            }

            while (tot > t) {
                cnt[s[l].charCodeAt() - 'a'.charCodeAt()]--;
                if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === k - 1) {
                    less++;
                }
                if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === 0) {
                    tot--;
                    less--;
                }
                l++;
            }
            if (less == 0) {
                ret = Math.max(ret, r - l + 1);
            }
            r++;
        }
    }
    return ret;
};
