/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let leftPtr = 0, rightPtr = s.length - 1;
    const arr = Array.from(s);
    // let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowels = 'aeiouAEIOU';
    while (leftPtr < rightPtr) {
        while (leftPtr < (s.length-1) && vowels.indexOf(s[leftPtr]) === -1) {
            leftPtr++;
        }

        while (rightPtr > 0 && vowels.indexOf(s[rightPtr]) === -1) {
            rightPtr--;
        }

        if (leftPtr < rightPtr) {
            [arr[leftPtr], arr[rightPtr]] = [arr[rightPtr], arr[leftPtr]];

            leftPtr++;
            rightPtr--;
        }
    }

    return arr.join('');
};
