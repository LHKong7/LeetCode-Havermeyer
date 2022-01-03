/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description: 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 * TestCase: s = "abcabcbb"
 * Output: 3 
 * Explanation: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * *****************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let checkedSet = new Set(); // 我们还需要使用一种数据结构来判断 是否有重复的字符
    let rPtr = -1, res = 0; // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动

    for (let i = 0; i < s.length; i++) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            checkedSet.delete(s.charAt(i - 1));
        }

        while (rPtr + 1 < s.length && !checkedSet.has(s.charAt(rPtr + 1))) {
            // 不断地移动右指针
            checkedSet.add(s.charAt(rPtr + 1));
            rPtr = rPtr + 1
        }

        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        res = Math.max(res, rPtr - i + 1);
    }
    return res;
};

s = "abcabcbb"
let res = lengthOfLongestSubstring(s);
console.log(res);


/**
 * @Idea:
 *  滑动窗口
 *  我们不妨以示例一中的字符串 abcabcbb 为例，找出从每一个字符开始的，不包含重复字符的最长子串，那么其中最长的那个字符串即为答案。对于示例一中的字符串，我们列举出这些结果，其中括号中表示选中的字符以及最长的字符
 *      这样一来，我们就可以使用「滑动窗口」来解决这个问题了：

我们使用两个指针表示字符串中的某个子串（或窗口）的左右边界，其中左指针代表着上文中「枚举子串的起始位置」，而右指针即为上文中的 r_kr 
k

在每一步的操作中，我们会将左指针向右移动一格，表示 我们开始枚举下一个字符作为起始位置，然后我们可以不断地向右移动右指针，但需要保证这两个指针对应的子串中没有重复的字符。在移动结束后，这个子串就对应着 以左指针开始的，不包含重复字符的最长子串。我们记录下这个子串的长度；

在枚举结束后，我们找到的最长的子串的长度即为答案
 * 
 * 
 * @Solution:
 * @DataStructure:
 */

