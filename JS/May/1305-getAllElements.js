/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let nums1 = [], nums2 = [];

    const inOrder = (node, nums) => {
        if (node) {
            inOrder(node.left, nums);
            nums.push(node.val);
            inOrder(node.right, nums);
        };
    };

    inOrder(root1, nums1);
    inOrder(root2, nums2);
    let res = new Array(nums1.length + nums2.length).fill(-1);
    let p1 = 0, p2 = 0, currPos = 0;
    while (currPos < nums1.length + nums2.length) {
        if (p1 < nums1.length && p2 < nums2.length && nums1[p1] <= nums2[p2]) {
            res[currPos] = nums1[p1];
            p1++;
            currPos++;
        } else if (p1 < nums1.length && p2 < nums2.length && nums1[p1] > nums2[p2]) {
            res[currPos] = nums2[p2];
            p2++;
            currPos++;
        } else if (p1 < nums1.length) {
            res[currPos] = nums1[p1];
            p1++;
            currPos++;
        } else {
            res[currPos] = nums2[p2];
            p2++;
            currPos++;
        }
    };

    return res;
};
