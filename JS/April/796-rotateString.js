/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const m = s.length;
    const n = goal.length;

    if (m !== n) return false;

    for (let i = 0; i < m; i++) {
        let flag = true;
        for (let j = 0; j < n; j++) {
            if (s[(i + j) % n] !== goal[j]) {
                flag = false;
                break;
            };
        };

        if (flag) {
            return true;
        }
    }

    return false;
};

