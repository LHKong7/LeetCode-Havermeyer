/**
 *  * @param {string} s
 *   * @return {number}
 *    */
var romanToInt = function(s) {
      const getNumericVal = (char) => {
                switch (char) {
                              case 'I':
                                    return 1;
                                case 'V':
                                    return 5;
                                case 'X':
                                    return 10
                                case 'L':
                                    return 50;
                                case 'C':
                                    return 100;
                                case 'D':
                                    return  500;
                                case 'M':
                                    return 1000;
                                default:
                                    return 0;
                            }
            }

      let sum = 0;
      let prev = getNumericVal(s[0]);

      for (let i = 1; i < s.length; i++) {
                let curr = getNumericVal(s[i]);

                if (prev < curr) {
                              sum -= prev;
                          } else {
                                        sum += prev
                                    }

                prev = curr;
            }

      sum += prev;
      return sum;
};

