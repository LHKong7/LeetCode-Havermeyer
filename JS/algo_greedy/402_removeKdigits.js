/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    for (let i = 0; i < k; i++) {
        let isDeleted = false;
        for (let j = 1; j < num.length; j++) { // compare num[j] and num[j-1]
            if (num[j] < num[j-1]) { // the number(char) order is desc, we need to remove j-1
                isDeleted = true;
                num = num.slice(0, j-1) + num.slice(j, num.length);
                break;
            }
        }
        // if number(char) order is ascending order, remove the last char
        if (!isDeleted) num = num.slice(0, num.length-1);
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
 var removeKdigits = function(num, k) {
    let monoStack = [];
    for (let i = 0; i < num.length; i++) {
        let char = num[i];
        while (monoStack.length !== 0 && k > 0 && monoStack[monoStack.length - 1] > char) {
            monoStack.pop();
            k--;
        }

        monoStack.push(char);
    }

    while (k > 0) {
        monoStack.pop();
        k--;
    }

    let res = '';
    let isFirst = true;
    for (let i = 0; i < monoStack.length; i++) {
        if (monoStack[i] === '0' && isFirst) continue;
        res += monoStack[i];
        isFirst = false
    }

    return res.length === 0 ? '0' : res;
};
