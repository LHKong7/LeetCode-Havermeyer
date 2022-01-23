const bubbleSort = (nums) => {
    if (nums === null || nums.length <= 1) return;

    const n = nums.length;

    for (let i = 1; i < n; i++) { // control bubble round
        let compareTimes = n - i;
        let swaped = false;
        for (let j = 0; j < compareTimes; j++) { // control every round times
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                swaped = true;
            }
        }

        if (!swaped) break;
    }
}

let array = [12, 23, 36, 9, 24, 42];
bubbleSort(array);
console.log("after sort, the array is: " + array.toString());
