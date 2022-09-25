/**
 * @param {number} n
 * @return {number}
 */
const check = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1];
var rotatedDigits = function(n) {
     let ans = 0;
     for (let i = 1; i <= n; ++i) {
         const num = '' + i;
         let valid = true, diff = false;
         for (let j = 0; j < num.length; ++j) {
             const ch = num[j];
             if (check[ch.charCodeAt() - '0'.charCodeAt()] === -1) {
                 valid = false;
             } else if (check[ch.charCodeAt() - '0'.charCodeAt()] === 1) {
                 diff = true;
             }
         }
         if (valid && diff) {
             ++ans;
         }
     }
     return ans;
 };

 