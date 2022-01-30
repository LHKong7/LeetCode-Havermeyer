const calculate_no_paren = (s) => {
    let preSign = 1;
    let num = 0;
    let res = 0;

    for (let c of s) {
        if (c <= '9' && c >= '0') {
            num = num * 10 + (c - '0');
        } else if (c === '+') {
            res += (preSign * num);
            preSign = 1;
            num = 0;
        } else if (c === '-') {
            res += (preSign * num);
            preSign = -1;
            num = 0;
        }
    }

    return res + preSign * num;
}

var calculate = function(s) {
    const ops = [1];
    let sign = 1;

    let ret = 0;
    const n = s.length;
    let i = 0;
    while (i < n) {
        if (s[i] === ' ') {
            i++;
        } else if (s[i] === '+') {
            sign = ops[ops.length - 1];
            i++;
        } else if (s[i] === '-') {
            sign = -ops[ops.length - 1];
            i++;
        } else if (s[i] === '(') {
            ops.push(sign);
            i++;
        } else if (s[i] === ')') {
            ops.pop();
            i++;
        } else {
            let num = 0;
            while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
                num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
                i++;
            }
            ret += sign * num;
        }
    }
    return ret;
};

const calculate_with_paren = (s) => {
    let preSign = 1;
    let num = 0;
    let res = 0;
    let stk = [];

    for (let c of s) {
        if (c <= '9' && c >= '0') {
            num = num * 10 + (c - '0');
        } else if (c === '+') {
            res += (preSign * num);
            preSign = 1;
            num = 0;
        } else if (c === '-') {
            res += (preSign * num);
            preSign = -1;
            num = 0;
        } else if (c === '(') {
            stk.push(res);
            stk.push(preSign);
            preSign = 1;
            res = 0;
        } else if (c === ')') {
            res += preSign * num;
            res *= stk.pop();
            res += stk.pop();
            num = 0;
        }
    }

    return res + preSign * num;
}
