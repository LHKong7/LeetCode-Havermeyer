// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)
const sort = function (data) {
    if (data == null || data.length == 0) return
    const tmp = new Array(data.length)

    // 给子数组进行排序，子问题
    const sortR = (left, right) => {
        if (left == right) return

        const mid = Math.floor((left + right) / 2)
        sortR(left, mid)
        sortR(mid + 1, right)
        merge2(data, left, mid, right, tmp)
    }

    sortR(0, data.length - 1)
}

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


const merge2 = function (data, left, mid, right, tmp) {
    for (let i = left; i <= right; i++) {
        tmp[i] = data[i]
    }

    let i = left;
    let j = mid + 1;
    for (let k = left; k <= right; k++) {
        if (i == mid + 1) { // 左边没有元素，右边有元素
            data[k] = tmp[j++]
        } else if (j == right + 1) { // 左边有元素，右边没有元素
            data[k] = tmp[i++]
        } else if (tmp[i] <= tmp[j]) {
            data[k] = tmp[i++]
        } else {
            // bug 修复：这个是 tmp[j++]
            data[k] = tmp[j++]
        }
    }
}

const sortBU = function (data) {
    if (data == null || data.length <= 1) return;
    const len = data.length;
    const tmp = new Array(len);
    for (let size = 1; size < len; size += size) { // size 表示子数组的长度，1,2,4,8
        for (let left = 0; left < len - size; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, len - 1);
            merge(data, left, mid, right, tmp);
        }
    }
}

// NEWEST UPDATE 8/24
const mergeSort = (arr) => {
    if (arr === null || arr.length < 2) return;

    sort2(arr, 0, arr.length-1);
}

const sort2 = (arr, left, right) => {
    if (left === right) return;
    let mid = Math.floor((left + right) / 2);
    sort2(arr, left, mid);
    sort2(arr, mid + 1, right);

    merge3(arr, left, mid, right);
}

const merge3 = (arr, left, mid, right) => {
    let tempArr = new Array(right - left + 1).fill(0);
    
    let tempPos = 0, i = left, j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            tempArr[tempPos] = arr[i];
            i++, tempPos++;
        } else {
            tempArr[tempPos] = arr[j];
            j++, tempPos++;
        }
    }

    while (i <= mid) {
        tempArr[tempPos] = arr[i];
        i++, tempPos++;
    }

    while (j <= right) {
        tempArr[tempPos] = arr[j];
        j++, tempPos++;
    }

    for (tempPos = 0; tempPos < tempArr.length; tempPos++) {
        arr[left] = tempArr[tempPos];
        left++;
    }
}


data = [34, 33, 12, 78, 21, 1, 98, 100]
// sortBU(data)
mergeSort(data);
console.log(data.toString())
