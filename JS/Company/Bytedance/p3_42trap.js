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
 *  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * TestCase: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）
 * *****************************************************************/

/**
 * 
 * @param {*} arr 
 * 
 * 
 *  IDEA: 朴素的做法是对于数组 height 中的每个元素，分别向左和向右扫描并记录左边和右边的最大高度，然后计算每个下标位置能接的雨水量。
 *          创建两个长度为 n 的数组 leftMax 和 rightMax。对于 0≤i<n，leftMax[i] 表示下标 i 及其左边的位置中height 的最大高度，rightMax[i] 表示下标 ii 及其右边的位置中，height 的最大高度。
 * 
 * 显然，leftMax[0]=height[0]，rightMax[n−1]=height[n−1]。两个数组的其余元素的计算如下：
        当 1≤i≤n−1 时，leftMax[i]=max(leftMax[i−1],height[i])；
        当 0≤i≤n−2 时，rightMax[i]=max(rightMax[i+1],height[i])。

    时间复杂度：O(n)O(n)，其中 nn 是数组height 的长度。计算数组 leftMax 和 rightMax 的元素值各需要遍历数组 height 一次，计算能接的雨水总量还需要遍历一次。
 */
var trap_dp = function(height) {
    const len = height.length;
    const leftMax = new Array(len).fill(0);
    const rightMax = new Array(len).fill(0);

    if (len == 0) {
        return 0;
    }

    leftMax[0] = height[0];
    for (let i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    rightMax[len-1] = height[len-1];
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }

    let res = 0;
    for (let i = 0; i < len; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return res;
}

var trap_twoPointer = function(height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            ++left;
        } else {
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
}

height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap_dp(height));

/**
 * @Idea: 
 * @Solution: 时间复杂度：O(n)，其中 nn 是数组 \textit{height}height 的长度。两个指针的移动总次数不超过 nn
 * @DataStructure:
 */

