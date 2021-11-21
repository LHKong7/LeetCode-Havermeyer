"""
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
 *  实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。
        如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
        必须 原地 修改，只允许使用额外常数空间。
 *
 * TestCase: nums = [1,2,3]
 * Output: [1,3,2]
 * Explanation:
 * *****************************************************************/
"""

class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = len(nums) - 1
            while j >= 0 and nums[i] >= nums[j]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        
        left, right = i + 1, len(nums) - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
        

"""
/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */
"""
