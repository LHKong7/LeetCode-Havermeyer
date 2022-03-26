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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (treeNode, val) => {
        if (treeNode === null) {
            return false;
        }

        let currVal = val - treeNode.val;
        if (treeNode.left === null && treeNode.right === null && currVal === 0) {
            return true;
        }
        return dfs(treeNode.left, currVal) || dfs(treeNode.right, currVal);
    }

    let res = dfs(root, targetSum);
    return res;
};

