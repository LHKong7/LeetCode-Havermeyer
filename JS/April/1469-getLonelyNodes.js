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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    let arr = [];
    const dfs = (root) => {
        if (root === null) return;
        if (root.left === null && root.right !== null) arr.push(root.right.val);
        if (root.left !== null && root.right === null) arr.push(root.left.val);

        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return arr;
};

