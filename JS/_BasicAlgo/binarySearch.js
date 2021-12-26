/**
 *  Divide-and-Conquer approach to make each operation focus on ignoring what
 *      we donot want instead of painfully looking for what we do want
 * 
 *  Three main components: Two pointers and one pivot.
 *      Each pointers starts at either end of the array with the pivot in the center
 *      We check if what we want is higher or lower than the pivot.
 *          if higher then the left pointer is moved to the pivot’s position while the pivot moved to the new middle. We keep running this until our pivot is equal to our target.
 */

const binarySearch = (arr, target) => {
    let leftPtr = 0;
    let rightPtr = arr.length;

    while (leftPtr <= rightPtr) {
        let mid = Math.floor((leftPtr + rightPtr) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            leftPtr = mid + 1;
        } else {
            rightPtr = mid - 1;
        }
    }

    return -1;
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

console.log(binarySearch(arr, x))


