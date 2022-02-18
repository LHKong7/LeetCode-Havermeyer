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
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums === null || nums.length === 0) return;

    const partition = (nums, low, high) => {
        const i = Math.floor(Math.random() * (high - low + 1))+ low;
        [nums[i], nums[high]] = [nums[high], nums[i]];
        const pivot = nums[high];

        let less = low;
        for (let great = low; great <= high - 1; great++) {
            if (nums[great] < pivot) {
                [nums[less], nums[great]] = [nums[great], nums[less]];
                less++;
            }
        }

        [nums[less], nums[high]] = [nums[high], nums[less]];
        return less;
    }

    const quickSort = (nums, low, high) => {
        if (low >= high) return;

        const j = partition(nums, low, high);
        quickSort(nums, low, j-1);
        quickSort(nums, j+1, high);
    }

    quickSort(nums, 0, nums.length -1);
    return nums
};



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

