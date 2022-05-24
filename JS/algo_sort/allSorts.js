// bubble Sort TimeComplexity: O(n^2)  SpaceComplexity: O(1)
const bubbleSort = (nums) => { // in-place change
    if (!nums || nums.length <= 1) return;

    for (let i = 1; i <= nums.length; i++) {
        let hasSwap = false;
        let compareTimes = nums.length - i;
        for (let j = 0; j < compareTimes; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                hasSwap = true;
            }
        }
        if (!hasSwap) return;
    }
};

// selection sort TimeComplexity: O(n^2) spaceComplexity: O(1)
const selectionSort = (nums) => {
    if (!nums || nums.length <= 1) return;

    for (let i = 0; i < nums.length; i++) { // 控制选择排序的轮数
        // find the minValIdx in [i, n)
        let minValIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minValIdx]) minValIdx = j;
        }

        // swap
        [nums[i], nums[minValIdx]] = [nums[minValIdx], nums[i]];
    }
};

// insertionSort 
const insertionSort = (nums) => { // TimeComplexity : O(n^2) SpaceComplexity: O(1)
    if (!nums || nums.length <= 1) return;

    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i];
        let j;
        for (j = i; j > 0; j--) { // 使用赋值可以减少交换次数
            if (temp < nums[j-1]) {
                nums[j] = nums[j-1];
            }
            else break;
        }

        nums[j] = temp;
    }
};

// ShellSort: 使数组中任意间隔 h 的元素有序，然后进行全局排序
const shellSort = (nums) => {
    if (!nums || nums.length <= 1) return;

    // 计算递增序列
    const n = nums.length;
    let ascendingList = [];
    let k = 1, h;
    do {
        h = ~~((Math.pow(3, k) - 1) / 2);

        if (h > n/3) break;

        ascendingList.push(h); // 1, 4, 13, 40, 121 ...
        k++;
    } while (h <= n / 3);

    for (let i = ascendingList.length-1; i >= 0; i--) {
        h = ascendingList[i];

        // 变成h有序
        for (let i = h; i < nums.length; i++) {
            let temp = nums[i];
            let j;
            for (j = i; j >= h; j = j - h) { // 使用赋值可以减少交换次数
                if (temp < nums[j-h]) {
                    nums[j] = nums[j-h];
                }
                else break;
            }
    
            nums[j] = temp;
        }
    }
};

const mergeSorter = (nums) => { // Space: O(n) TimeComplexity: O(nlogn)
    if (!nums || nums.length < 2) return;
    const tmp = new Array(data.length)

    const merge = function (data, left, mid, right, tmp) {
        let tmpPos = left, i = left, j = mid + 1
        // 将左边和右边的元素按照顺序拷贝到临时的数组中
        while (i <= mid && j <= right) {
            if (data[i] <= data[j]) {
                tmp[tmpPos++] = data[i++]
            } else {
                tmp[tmpPos++] = data[j++]
            }
        }
    
        // 如果左边还有元素，则直接将左边的元素拷贝到临时数组
        while (i <= mid) {
            tmp[tmpPos++] = data[i++]
        }
        // 如果右边还有元素，则直接将右边的元素拷贝到临时数组
        while (j <= right) {
            tmp[tmpPos++] = data[j++]
        }
        // 拷贝
        for (tmpPos = left; tmpPos <= right; tmpPos++) {
            data[left++] = tmp[tmpPos]
        }
    }
    // subproblem, sort the subarray
    const mergeSort = (data, left, right) => {
        if (left === right) return;

        let mid = Math.floor((left + right) / 2);
        mergeSort(data, left, mid);
        mergeSort(data, mid+1, right);

        merge(data, left, mid, right, tmp);
    };

    mergeSort(nums, 0, nums.length-1);
}

const quickSorter = (nums) => { // Time: O(nlogn) Space: O(logn)
    if (!nums || nums.length < 2) return;

    const partition = (low, high) => {
        let pivot = nums[high];
        let less = low, great = low;

        for (; great <= high - 1; great++) {
            if (nums[great] < pivot) {
                [nums[less], nums[great]] = [nums[great], nums[less]];
                less++;
            }
        }

        [nums[less], nums[high]] = [nums[high], nums[less]];

        return less;
    }

    const quickSort = (low, high) => {
        if (low >= high) return;

        let j = partition(low, high);
        quickSort(low, j-1);
        quickSort(j+1, high);
    };

    quickSort(0, nums.length-1);
};

const threeWay_quickSorter = (nums) => {
    if (!nums || nums.length < 2) return;

    const quickSort3Ways = (lo, hi) => {
        if (lo >= hi) return;

        // 分区
        let pivot = nums[hi]

        let less = lo
        let great = hi

        let i = lo
        while (i <= great) {
            if (nums[i] < pivot) {
                [nums[less], nums[i]] = [nums[i], nums[less]]
                less++
                i++
            } else if (data[i] > pivot) {
                [nums[i], nums[great]] = [nums[great], nums[i]]
                great--
            } else {
                i++
            }
        }

        quickSort3Ways(lo, less-1);
        quickSort3Ways(great+1, hi);
    };

    quickSort3Ways(0, nums.length-1);
};


const BucketSort = function (data) {
    if (data == null || data.length == 0) return

    // 1. 创建几个空的 bucket
    let maxValue = data[0];
    for (const d of data) {
        maxValue = Math.max(maxValue, d)
    }
    /*
    这里为什么是除以 10 呢？
    在视频中，我们讲过，假设数组中的元素的大小是 0 到 39
    然后我们想划分成 4 个桶，所以 39 / 10 + 1 = 4

    这里需要注意的是：bucketNum 的计算是根据场景确定的，不同的场景 bucketNum 的计算方式是不同的
    所以 bucketNum 的计算之前，需要确定桶排序使用的场景
     */
    const bucketNum = Math.floor(maxValue / 10) + 1 // 39 / 10 + 1 = 4
    const buckets = new Array(bucketNum)

    // 2. 将所有的元素添加进对应的 bucket
    for (let i = 0; i < data.length; i++) {
        // 计算当前元素应该被分配到哪一个桶里
        const index = Math.floor(data[i] / 10)
        if (buckets[index] == null) {
            buckets[index] = [];
        }
        buckets[index].push(data[i])
    }

    // 3. 对每一个 bucket 中的元素进行排序
    for (let i = 0; i < bucketNum; i++) {
        const bucketData = buckets[i]
        if (bucketData != null) {
            quickSort(bucketData)
        }
    }

    // 4. 从 buckets 中拿到排序后的数组
    let index = 0
    for (let i = 0; i < bucketNum; i++) {
        const bucketData = buckets[i]
        if (bucketData != null) {
            for (let j = 0; j < bucketData.length; j++) {
                data[index++] = bucketData[j]
            }
        }
    }
}


const CountingSort = function (data) {
    if (data == null || data.length == 0) return

    // 1. 找到数组中的最大值，初始化计数器
    let max = data[0]
    let min = data[0]
    for (let i = 1; i < data.length; i++) { // O(n)
        max = Math.max(max, data[i])
        min = Math.min(min, data[i])
    }
    const count = new Array(max - min + 1).fill(0)

    // 2. 计数
    for (let i = 0; i < data.length; i++) { // O(n)
        count[data[i] - min]++
    }

    // 3. 计数累加
    for (let i = 1; i < count.length; i++) { // O(k)
        count[i] += count[i - 1]
    }

    // 4. 计算每个元素在排序数组中的位置
    const output = new Array(data.length).fill(0);
    for (let i = data.length - 1; i >= 0; i--) { // O(n)
        const j = data[i]
        const k = count[j - min] - 1
        output[k] = data[i]

        count[j - min]--
    }

    // 5. 拷贝数组
    for (let i = 0; i < data.length; i++) { // O(n)
        data[i] = output[i]
    }
}

const RadixSort = function (data) {
    if (data == null || data.length == 0) return

    // 1. 找到最大值  4006869915
    let max = data[0]
    for (let i = 1; i < data.length; i++) {
        max = Math.max(max, data[i])
    }

    // 2. 对数组按照每个元素的每位进行计数排序
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) { // O(n)
        countSort(data, exp) // 时间复杂度：O(n)
    }
}

// 时间复杂度：O(n)
const countSort = function (data, exp) {
    // 之所以是 10，是因为数字只有 0...9 十个数字
    const count = new Array(10).fill(0);

    for (let i = 0; i < data.length; i++) {
        // 个位数： (234 / 1) % 10 = 4
        // 十位数： (234 / 10) % 10 = 3
        // 百位数： (234 / 100) % 10 = 2
        const digit = (Math.floor(data[i] / exp)) % 10
        count[digit]++
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }

    const output = new Array(data.length).fill(0)
    for (let i = data.length - 1; i >= 0; i--) {
        const digit = (Math.floor(data[i] / exp)) % 10
        const k = count[digit] - 1
        output[k] = data[i]
        count[digit]--
    }

    for (let i = 0; i < data.length; i++) {
        data[i] = output[i]
    }
}


let data = [12, 23, 36, 9, 24, 42];
// let data = [2, 5, 1, 23, 22, 33, 56, 12, 5, 3, 5, 6, 8, 2, 3, 4];
// bubbleSort(data);
// selectionSort(data);
// insertionSort(data)
// shellSort(data);
// mergeSorter(data);
// quickSorter(data);
threeWay_quickSorter(data);
console.log("after sort the nums is: ", data);
