/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const n = letters.length;
    if (target >= letters[n-1]) {
        return letters[0];
    };

    let leftPtr = 0, rightPtr = n - 1;
    while (leftPtr < rightPtr) {
        const mid = Math.floor((rightPtr - leftPtr) / 2) + leftPtr;

        if (letters[mid] > target) {
            rightPtr = mid;
        } else {
            leftPtr = mid + 1;
        }
    }

    return letters[leftPtr];
};

