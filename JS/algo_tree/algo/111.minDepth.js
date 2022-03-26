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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;

    if (root.left === null && root.right === null) return 1;

    let MinDepth = Number.MAX_SAFE_INTEGER;

    if (root.left) {
        MinDepth = Math.min(minDepth(root.left), MinDepth);
    }

    if (root.right) {
        MinDepth = Math.min(minDepth(root.right), MinDepth);
    }

    return MinDepth + 1;
};

