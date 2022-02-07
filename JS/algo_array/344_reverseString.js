/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length;
    let leftPtr = 0, rightPtr = n-1;

    while (leftPtr < rightPtr) {
        [s[leftPtr], s[rightPtr]] = [s[rightPtr], s[leftPtr]];
        leftPtr += 1;
        rightPtr -= 1;
    }

    return s;
};
