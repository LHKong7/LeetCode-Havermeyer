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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (!root) return [];
    const queue = [root];

    while (queue.length) {
        let levelPath = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const treeNode = queue.shift();
            levelPath.push(treeNode.val);

            if (treeNode.left) queue.push(treeNode.left);
            if (treeNode.right) queue.push(treeNode.right);
        }

        res.push(levelPath);
    }

    return res;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

