
const getAllSubstring = str => {
  let substrings = [];
  let n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      substrings.push(str.substring(i, j));
    }
  }

  return substrings;
}

const getConsecutiveSubstrings = str => {
  let consecutiveSubstrings = [];
  let rightPtr = 1;

  while (rightPtr <= str.length) {
    consecutiveSubstrings.push(str.substring(0, rightPtr));
    rightPtr++;
  }

  return consecutiveSubstrings;
}


let testStr = "barfoo";
console.log("All substring of testStr: ", getConsecutiveSubstrings(testStr));

