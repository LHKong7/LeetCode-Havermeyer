/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *  Given an array, we pick an item, called pivot.
 *      We then get all the items smaller than the pivot,
 *          and the items bigger than the pivot.
 *  Then we run the same operation on the 2 array that compose the smaller and bigger items.
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/
const quickSort = (originaList) => {
    const list = [...originaList];

    if (list.length < 2) {
        return list;
    }

    const pivot = list[0]; // const pivot = list[Math(floor(list.length / 2)]

    const smaller = list.filter((item) => item < pivot)
    const bigger = list.filter((item) => item > pivot)

    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

const partition = (arr, left, right) => {
  let pivot = Math.floor((right + left) / 2);
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }

    while (arr[j] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      arr[i], arr[j] = arr[j], arr[i];
      i += 1;
      j -= 1;
    }
  }

  return i;
}

function QUICKSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

const a = [1, 6, 3, 4, 5, 1, 0, 4, 8]

console.log(quickSort(a))
//[0, 1, 1, 3, 4, 4, 5, 6, 8

console.log(a)
//[1, 6, 3, 4, 5, 1, 0, 4, 8]

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

