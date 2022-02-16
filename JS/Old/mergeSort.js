const mergeSort = function(nums) {
    if (nums === null || nums.length < 2) return;
    let tempArr = new Array(nums.length);
    const sort = (nums, left, right) => {
        if (left === right) return;

        let mid = Math.floor((left + right) / 2);
        sort(nums, left, mid);
        sort(nums, mid+1, right);

        merge(nums, left, mid, right);
    };

    const merge = (nums, left, mid, right) => {
        let tempPos = left, i = left, j = right;

        while (i <= mid && j <= right) {
            if (data[i] <= data[j]) {
                tempArr[tempPos] = data[i];
                i += 1;
            } else {
                tempArr[tempPos] = data[j];
                j += 1;
            }
            tempPos++;
        }

        while (i <= mid) {
            tempArr[tempPos] = data[i];
            tempPos++;
            i++;
        }

        while (j <= right) {
            tempArr[tempPos] = data[j];
            tempPos++;
            j++;
        }

        // 拷贝
        for (tmpPos = left; tmpPos <= right; tmpPos++) {
            nums[left] = tempArr[tmpPos]
            left++;
        }
    };

    sort(nums, 0, nums.length - 1);
}

function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) return arr;
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
   
    return merge(mergeSort(left), mergeSort(right));
  }
   
  function merge(left, right) {
    let result = [];
   
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
   
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
   
    return result;
}

data = [34, 33, 12, 78, 21, 1, 98, 100]
mergeSort(data)
console.log(data);