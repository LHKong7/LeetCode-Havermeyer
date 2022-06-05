const calculator = (s) => {
    let preSign = 1; // -1 for Negative Number
    let num = 0;
    let res = 0;

    for (const char of s) {
        if (char <= '9' && char >= '0') {
            num = num * 10 + (c - '0');
        }
        else if (c === '+') {
            res += (preSign * num);
            preSign = 1;
            num = 0;
        }
        else if (c === '-') {
            res += (preSign * num);
            preSign = -1;
            num = 0;
        }
    }

    return res + preSign * num;
}

/**
 * @param {string} s
 * @return {number}
 */
var calculator_parentheses = function(s) {
    let preSign = 1; // -1 for Negative Number
    let num = 0;
    let res = 0;
    const parenthesesStk = [];

    for (const char of s) {
        if (char <= '9' && char >= '0') {
            num = num * 10 + (char - '0');
        }
        else if (char === '+') {
            res += (preSign * num);
            preSign = 1;
            num = 0;
        }
        else if (char === '-') {
            res += (preSign * num);
            preSign = -1;
            num = 0;
        }
        else if (char === '(') {
            parenthesesStk.push(res);
            parenthesesStk.push(preSign);
            preSign = 1;
            res = 0;
        }
        else if (char === ')') {
            res += (preSign * num);
            res *= parenthesesStk.pop();
            res += parenthesesStk.pop();
            num = 0;
        }
    }

    return res + preSign * num;
};

