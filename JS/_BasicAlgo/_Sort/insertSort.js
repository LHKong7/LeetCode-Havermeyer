// insertion Sort

var insertionSort = (arr) => {
    for (let j = 1; j < arr.length; j++) {
        let current = arr[j];
        let i = j - 1;

        while (i >= 0 && arr[i] > current) {
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = current;
    }
}

function Insertion(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while (preIndex >= 0 && current < arr[preIndex]) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
    }
  }

let arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr);
console.log(arr);
