
const basic_BinarySearch = (nums, target) => {
  let leftPtr = 0, rightPtr = nums.length - 1;

  while (leftPtr <= rightPtr) { // the equal also need to check
    let middleIdx = leftPtr + Math.floor((rightPtr - leftPtr) / 2);

    if (nums[middleIdx] === target) {
      return middleIdx;
    } else if (nums[middleIdx] < target) {
      leftPtr = middleIdx + 1;
    } else if (nums[middleIdx] > target) {
      rightPtr = middleIdx - 1;
    }
  }

  return -1;
};

const oneLineSearch = (nums, target) => {
  return nums.indexOf(target);
};

const binarySearch_recursive = (nums, target) => {
  const contains = (nums, left, right, target) => {
    if (left > right) return -1;

    let middleIdx = left + Math.floor((right - left) / 2);
    if (nums[middleIdx] === target) {
      return middleIdx;
    } else if (nums[middleIdx] < target) {
      return contains(nums, middleIdx+1, right, target);
    } else if (nums[middleIdx] > target) {
      return contains(nums, left, middleIdx-1, target);
    }
  }

  return contains(nums, 0, nums.length-1, target);
}

const binarySearch_firstEqual = (nums, target) => {
  let leftPtr = 0, rightPtr = nums.length - 1;

  while (leftPtr <= rightPtr) { // the equal also need to check
    let middleIdx = leftPtr + Math.floor((rightPtr - leftPtr) / 2);

    if (nums[middleIdx] === target) {
      if (middleIdx === 0 || nums[middleIdx-1] !== target) return middleIdx;
      else rightPtr = middleIdx - 1;
    } else if (nums[middleIdx] < target) {
      leftPtr = middleIdx + 1;
    } else if (nums[middleIdx] > target) {
      rightPtr = middleIdx - 1;
    }
  }

  return -1;
}

const binarySearch_firstGreaterEqual = (nums, target) => {
  let leftPtr = 0, rightPtr = nums.length - 1;

  while (leftPtr <= rightPtr) { // the equal also need to check
    let middleIdx = leftPtr + Math.floor((rightPtr - leftPtr) / 2);

    if (nums[middleIdx] >= target) {
      if (middleIdx === 0 || (nums[middleIdx - 1] < target)) return middleIdx;
      else rightPtr = middleIdx - 1;
    } else {
      leftPtr = middleIdx + 1;
    }
  }

  return -1;
}

let arr = [-1,0,3,5,9,12];
let target = 12;
console.log(binarySearch_recursive(arr, target));


