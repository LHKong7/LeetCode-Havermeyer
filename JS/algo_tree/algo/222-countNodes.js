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
var countNodes = function(root) {
    if (root === null) return 0;
    const dfs = (treeNode) => {
        if (treeNode === null) return 0;

        let left = dfs(treeNode.left);
        let right = dfs(treeNode.right);

        return left + right + 1;
    }

    let res = dfs(root);
    return res;
};

