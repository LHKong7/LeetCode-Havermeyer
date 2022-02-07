/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let charArr = new Array(26).fill(0);
    
    for (let char of s) {
        charArr[char.charCodeAt() - 'a'.charCodeAt()] += 1;
    }

    let res = '';
    while (res.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (charArr[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt());
                charArr[i]--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            if (charArr[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt());
                charArr[i]--;
            }
        }
    }

    return res;
};
