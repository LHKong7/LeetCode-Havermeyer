/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    let freq = new Array(26).fill(Number.MAX_VALUE);
    let res = [];

    for (let i = 0; i < words.length; i++) {
        let minFreq = new Array(26).fill(0);
        let curWord = words[i];

        for (let j = 0; j < curWord.length; j++) {
            minFreq[curWord[j].charCodeAt() - 97] += 1;
        }

        for (let k = 0; k < 26; k++) {
            freq[k] = Math.min(minFreq[k], freq[k]);
        }
    }

    for (let i = 0; i < 26; i++) {
        while (freq[i] !== 0 && freq[i] !== Number.MAX_VALUE) {
            res.push(String.fromCharCode(i + 97));
            freq[i] -= 1;
        }
    }

    return res;
};
