/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let low = 0, high = s.length-1;
    const isPalindrome = (s, left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    while (low < high) {
        if (s[low] === s[high]) {
            low++;
            high--;
        } else {
            return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1);
        }
    }
    return true;
};
