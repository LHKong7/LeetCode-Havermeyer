/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
      const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
      let idx = 0;
      let res = '';
  
      while (idx < 13) {
          while (nums[idx] <= num) {
              res += romanNum[idx];
              num -= nums[idx];
          }
  
          idx++;
      }
  
      return res;
};
