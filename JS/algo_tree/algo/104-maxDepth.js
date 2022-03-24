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
var maxDepth = function(root) {
    if (root === null) return 0;

    let maxDep = Number.MIN_SAFE_INTEGER;
    const dfs = (node, depth = 0) => {
        if (node === null) return;

        depth = depth + 1;
        maxDep = Math.max(maxDep, depth);
        dfs(node.left, depth);
        dfs(node.right, depth);
    };

    dfs(root);
    return maxDep;
};

