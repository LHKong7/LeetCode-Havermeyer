/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    const a = s.slice(0, s.length / 2);
    const b = s.slice(s.length / 2);
    const h = "aeiouAEIOU";
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (h.indexOf(a[i]) >= 0) {
            sum1++;
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (h.indexOf(b[i]) >= 0) {
            sum2++;
        }
    }
    return sum1 === sum2;
};
