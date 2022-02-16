/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let n = releaseTimes.length;
    let res = keysPressed[0];
    let maxTime = releaseTimes[0];

    for (let i = 1; i < n; ++i) {
        let curTime = releaseTimes[i] - releaseTimes[i - 1];

        if (curTime > maxTime || (curTime === maxTime && keysPressed[i] > res)) {
            res = keysPressed[i];
            maxTime = curTime;
        }
    }

    return res;
};
let releaseTimes = [9,29,49,50], keysPressed = "cbcd";
console.log(slowestKey(releaseTimes, keysPressed));
