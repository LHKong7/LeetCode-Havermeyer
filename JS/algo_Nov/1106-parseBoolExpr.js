/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const stk = [];
    const n = expression.length;

    for (let i = 0; i < n; i++) {
        const char = expression[i];

        if (char === ',') {
            continue;
        } else if (char !== ')') {
            stk.push(char);
        } else {
            let t = 0, f = 0;

            while (stk[stk.length-1] !== '(') {
                const val = stk.pop();

                if (val === 't') {
                    t++;
                } else {
                    f++;
                }
            }
            stk.pop();
            const op = stk.pop();

            switch(op) {
            case '!':
                stk.push(f === 1 ? 't' : 'f');
                break;
            case '&':
                stk.push(f === 0 ? 't' : 'f');
                break;
            case '|':
                stk.push(t > 0 ? 't' : 'f');
                break;
            default:
                break;
            }
        }
    }
    return stk.pop() === 't';
};
