const selectionSort = (nums) => {
    if (nums === null || nums.length <= 1) return;

    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;

        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) {
                minIdx = j;
            }
        }
        // swap
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
    }
}

let array = [12, 23, 36, 9, 24, 42];
selectionSort(array);
console.log("after sort, the array is: " + array.toString());
