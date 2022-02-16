// insertion Sort

// var insertionSort = (arr) => {
//     for (let j = 1; j < arr.length; j++) {
//         let current = arr[j];
//         let i = j - 1;

//         while (i >= 0 && arr[i] > current) {
//             arr[i + 1] = arr[i];
//             i = i - 1;
//         }
//         arr[i + 1] = current;
//     }
// }

const insertionSort = (nums) => {
  if (nums === null || nums.length <= 1) return;

  const n = nums.length;

  for (let i = 1; i < n; i++) {
    let temp = nums[i];
    // 将较大的元素往后移
    let j;
    for (j = i; j > 0; j--) {
      if (temp < nums[j - 1]) {
        nums[j] = nums[j - 1];
      } else {
        break
      }
    }
    nums[j] = temp
  }
}

let arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr);
console.log(arr);
