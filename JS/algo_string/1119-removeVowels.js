/**
 * @param {string} s
 * @return {string}
 */
 var removeVowels = function(s) {
    return s.replaceAll(/[aeiou]/g, '');
};
