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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
    if (!root) return true;
    let val = root.val;

    const dfs = (treeNode, val) => {
        if (!treeNode) return true;

        if (treeNode.val !== val) return false;

        return dfs(treeNode.left, val) && dfs(treeNode.right, val);
    }

    return dfs(root, val);
};
