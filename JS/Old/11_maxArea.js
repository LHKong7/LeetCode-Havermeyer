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
 *  给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * TestCase: [1,8,6,2,5,4,8,3,7]
 * Output: 49 
 * Explanation: 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * *****************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let leftPtr = 0;
    let rightPrt = height.length - 1;
    let res = 0;

    while (leftPtr < rightPrt) {
        let minArea = Math.min(height[rightPrt] * (rightPrt-leftPtr), (rightPrt-leftPtr) * height[leftPtr]);

        res = Math.max(minArea, res);

        if (height[rightPrt] < height[leftPtr]) {
            rightPrt -= 1
        } else {
            leftPtr += 1
        }
    }
    return res;
};

var maxArea_BF = function(height) {
    let n = height.length;
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let curArea = Math.min(height[i], height[j]) * (j-i);
            maxArea = Math.max(maxArea, curArea);
        }
    }

    return maxArea;
}



/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

