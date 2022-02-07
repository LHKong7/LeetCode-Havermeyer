/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let n = s.length;
    let leftPtr = 0, rightPtr = n - 1;

    const isValid = (str) => {
        return str >= 'a' && str <= 'z' || str >= '0' && str <= '9';
    }
    while (leftPtr < rightPtr) {
        if (!isValid(s[leftPtr])) {
            leftPtr += 1;
            continue;
        }
        if (!isValid(s[rightPtr])) {
            rightPtr -= 1;
            continue;
        }
        
        if (s[leftPtr] !== s[rightPtr]) return false;
        leftPtr++;
        rightPtr--;
    }

    return true;
};
