/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let prev;
    let curr = '1';

    for (let i = 1; i < n; i++) {
        prev = curr;
        curr = '';

        let say = prev[0];
        let count = 1;
        for (let j = 1; j < prev.length; j++) {
            if (prev[j] == say) {
                count++;
            } else {
                curr += count + say;
                say = prev[j];
                count = 1;
            }
        }

        curr += count + say;
    }

    return curr;
};
