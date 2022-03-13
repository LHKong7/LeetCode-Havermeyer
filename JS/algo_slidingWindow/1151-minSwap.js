
const minSwap = (data) => {
  let countOne = 0;
  for (let num of data) {
    if (num === 1) countOne++;
  }

  let leftPtr = 0, rightPtr = 0;
  let winZeroCnt = 0;
  let minZeroCnt = Number.MAX_SAFE_INTEGER;

  while (rightPtr < data.length) {
    if (data[rightPtr] === 0) winZeroCnt++;
    if (rightPtr - leftPtr + 1 === countOne) {
      minZeroCnt = Math.min(minZeroCnt, winZeroCnt);
      if (data[leftPtr] === 0) winZeroCnt--;
      leftPtr++;
    }

    rightPtr++;
  }

  return minZeroCnt === Number.MAX_SAFE_INTEGER ? 0 : minZeroCnt;
}

let nums = [1,0,1,0,1];
console.log("res: ", minSwap(nums));

