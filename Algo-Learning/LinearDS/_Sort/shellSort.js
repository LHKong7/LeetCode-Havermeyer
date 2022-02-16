const shellSort = function (data) {
    if (data == null || data.length == 0) return

    // 1. 计算递增序列
    const n = data.length
    const list = []
    let k = 1
    let h
    do {
        h = Math.floor((Math.pow(3, k) - 1) / 2)
        if (h > Math.floor(n / 3)) break
        list.push(h) // 1, 4, 13, 40, 121......
        k++
    } while (h <= Math.floor(n / 3))

    // 2. 希尔排序
    for (let k = list.length - 1; k >= 0; k--) { // 倒序遍历
        h = list[k]
        // 将数组变为 h 有序
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h; j = j - h) {
                if (data[j] < data[j - h]) {
                    [data[j], data[j - h]] = [data[j - h], data[j]]
                } else {
                    break
                }
            }
        }
    }
}

let data = [2, 5, 1, 23, 22, 33, 56, 12, 5, 3, 5, 6, 8, 2, 3, 4]
shellSort(data)
console.log(data)

