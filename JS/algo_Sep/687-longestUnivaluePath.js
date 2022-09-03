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
 var longestUnivaluePath = function(root) {
    if (root === null) return 0;
    let res = Number.MIN_SAFE_INTEGER;

    const dfs = (node) => {
        if (node === null) return 0;

        let left = dfs(node.left), right = dfs(node.right);
        let left1 = 0, right1 = 0;
        if (node.left && node.left.val === node.val) left1 = left+1;
        if (node.right && node.right.val === node.val) right1 = right+1;

        res = Math.max(res, left1 + right1);
        return Math.max(left1, right1)
    }

    dfs(root);

    return res;
};