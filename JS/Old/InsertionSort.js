var insertionSort = (nums) => {
    if (nums === null || nums.length <= 1) return;
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; i > 0; j--) {
            if (nums[j] < nums[j-1]) {
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            } else {
                break;
            }
        }
    }
}
