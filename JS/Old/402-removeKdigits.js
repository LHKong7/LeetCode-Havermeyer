/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// Time Complexity: O(nk)
var removeKdigits = function(num, k) {
    for (let i = 0; i < k; i++) {
        let hasDeleted = false;
        for (let j = 1; j < num.length; j++) {
            let leftJ = j - 1;
            if (num[j] < num[leftJ]) {
                num = num.slice(0, j-1) + num.slice(j, num.length);
                hasDeleted = true;
                break;
            }
        }
        if (!hasDeleted) num = num.slice(0, num.length-1);
    }
    
    let len = num.length;
    while (len !== 0) {
        if (num.charAt(0) > '0') break;
        num = num.slice(1);
        len = num.length;
    }

    return num.length === 0 ? '0' : num;
};

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits_monoStk = function(num, k) {
    let monoStk = [];
    for (let i = 0; i < num.length; i++) {
        let char = num[i];
        while (monoStk.length !== 0 && k > 0 && monoStk[monoStk.length - 1] > char) {
            monoStk.pop();
            k--;
        }
        monoStk.push(char);
    }

    while (k > 0) {
        monoStk.pop();
        k--;
    }

    let res = '';
    let isFirst = true;
    for (let i = 0; i < monoStk.length; i++) {
        if (monoStk[i] === '0' && isFirst) continue;
        res += monoStk[i];
        isFirst = false
    }

    return res.length === 0 ? '0' : res;
};

let num = "1432219", k = 3;
let res = removeKdigits_monoStk(num, k);
console.log(res);
