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
var sumOfLeftLeaves = function(root) {
    const isLeafNode = node => {
        return !node.left && !node.right;
    };

    const dfs = node => {
        let res = 0;
        if (node.left) {
            res += isLeafNode(node.left) ? node.left.val : dfs(node.left);
        }

        if (node.right && !isLeafNode(node.right)) {
            res += dfs(node.right);
        }

        return res;
    }

    return root ? dfs(root) : 0;
};

