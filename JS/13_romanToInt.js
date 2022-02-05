/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbolVals = new Map();

    symbolVals.set('I', 1);
    symbolVals.set('V', 5);
    symbolVals.set('X', 10);
    symbolVals.set('L', 50);
    symbolVals.set('C', 100);
    symbolVals.set('D', 500);
    symbolVals.set('M', 1000); 

    let res = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let val = symbolVals.get(s[i]);
        if (i < n - 1 && val < symbolVals.get(s[i+1])) {
            res -= val;
        } else {
            res += val;
        }
    }

    return res;
};
