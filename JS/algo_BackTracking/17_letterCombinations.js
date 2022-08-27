/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let digitsAlphabetMapping = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ]);

    let res = [];

    const backTracking = (digits, index, combination) => {
        if (index == digits.length) {
            res.push(combination);
        } else {
            let digit = digits[index];
            let letters = digitsAlphabetMapping.get(digit);
            for (let i = 0; i < letters.length; i++) {
                backTracking(digits, index+1, combination+letters[i]);
            }
        }
    };

    if (!digits.length) return [];
    backTracking(digits, 0, '');
    return res;
};
