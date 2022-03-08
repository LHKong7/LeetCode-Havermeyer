/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let countInT = new Array(60).fill(0);
    let uniqueCharsOfT = 0;
    for (let char of t) {
        if (countInT[char.charCodeAt() - 'A'.charCodeAt()] === 0) uniqueCharsOfT++;
        countInT[char.charCodeAt() - 'A'.charCodeAt()]++;
    }

    let leftPtr = 0, rightPtr = 0;
    let winCntS = new Array(60).fill(0);
    let matchedChars = 0;
    let res = [-1, 0, 0]; // idx: {0->curr window length ; 1->left boundary; 2->right boundary}
    while (rightPtr < s.length) {
        let rightChar = s[rightPtr];
        let rightCharIdx = rightChar.charCodeAt() - 'A'.charCodeAt();
        winCntS[rightCharIdx]++;

        if (winCntS[rightCharIdx] === countInT[rightCharIdx]) {
            matchedChars++;
        }

        while (leftPtr <= rightPtr && matchedChars === uniqueCharsOfT) {
            if (res[0] === -1 || res[0] > rightPtr - leftPtr + 1) {
                res[0] = rightPtr - leftPtr + 1;
                res[1] = leftPtr;
                res[2] = rightPtr;
            }

            let leftChar = s[leftPtr];
            let leftCharIdx = leftChar.charCodeAt() - 'A'.charCodeAt();
            winCntS[leftCharIdx]--;
            if (winCntS[leftCharIdx] < countInT[leftCharIdx]) {
                matchedChars--;
            }
            leftPtr++;
        }
        rightPtr++;
    }

    return res[0] === -1 ? '' : s.substring(res[1], res[2]+1);
};