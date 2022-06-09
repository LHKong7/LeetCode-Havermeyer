/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.arr = [0];
    this.rects = rects;
    for (const rect of rects) {
        const a = rect[0], b = rect[1], x = rect[2], y = rect[3];
        this.arr.push(this.arr[this.arr.length - 1] + (x - a + 1) * (y - b + 1));
    }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let k = Math.floor(Math.random() * this.arr[this.arr.length - 1]);
    const rectIndex = binarySearch(this.arr, k + 1) - 1;
    k -= this.arr[rectIndex];
    const rect = this.rects[rectIndex];
    const a = rect[0], b = rect[1], y = rect[3];
    const col = y - b + 1;
    const da = Math.floor(k / col);
    const db = k - col * da;
    return [a + da, b + db];
};

const binarySearch = (arr, target) => {
    let left = 0, right = arr.length-1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) right = mid-1;
        else left = mid + 1;
    }

    return left;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
