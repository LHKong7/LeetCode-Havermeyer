/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let res = [0];

    for (let char of s) {
        if (char === '(') {
            res.push(0)
        } else {
            let topEl = res.pop();
            let leastScore = res.pop() + Math.max(2 * topEl, 1);
            res.push(leastScore);
        }
    }

    return res[0];
};
