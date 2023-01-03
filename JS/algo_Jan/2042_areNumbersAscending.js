/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let prev = 0, pos = 0;

    while (pos < s.length) {
        if (isDigit(s[pos])) {
            let curr = 0;

            while (pos < s.length && isDigit(s[pos])) {
                curr = curr * 10 + s[pos].charCodeAt() - '0'.charCodeAt(); 
                pos++;
            }

            if (curr <= prev) {
                return false;
            }
            prev = curr;
        } else {
            pos++;
        }
    }

    return true;
};

var isDigit = (char) => {
    return parseInt(char) || parseInt(char) === 0;
}

// Built-in
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let strArr = s.split(' ');
    let prev = -1;
    for (let str of strArr) {
        if (parseInt(str) || parseInt(str) === 0) {
            let curr = parseInt(str);
            if (curr <= prev) return false;
            prev = curr;
        }
    }

    return true;
};

