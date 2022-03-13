
const maxConsecutiveOnesIII = (nums, k) => {
  let res = 0;
  let leftPtr = 0, rightPtr = 0;
  let windowZeroCnt = 0;

  while (rightPtr < nums.length) {
    if (nums[rightPtr] == 0) {
      windowZeroCnt++;
      if (windowZeroCnt == k + 1) {
        res = Math.max(res, rightPtr - leftPtr);
      }
    }

    while (windowZeroCnt > k) {
      if (nums[leftPtr] === 0) windowZeroCnt--;
      leftPtr++;
    }

    rightPtr++;
  }

  return Math.max(res, rightPtr - leftPtr);
}

const arr = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;

console.log(maxConsecutiveOnesIII(arr, k));

