/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftPtr = 0, rightPtr = s.length - 1;

    while (leftPtr < rightPtr) {
        [s[leftPtr], s[rightPtr]] = [s[rightPtr], s[leftPtr]];
        leftPtr += 1;
        rightPtr -= 1;
    }
};

let vowels = 'aeiouAEIOU';
console.log(vowels.indexOf('1'))
