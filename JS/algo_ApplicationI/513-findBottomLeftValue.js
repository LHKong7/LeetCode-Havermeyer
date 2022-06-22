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
var findBottomLeftValue = function(root) {
    let currVal = 0;
    let currDepth = 0;
    const dfs = (tNode, depth) => {
        if (tNode === null) return;

        depth++;
        dfs(tNode.left, depth);
        dfs(tNode.right, depth);
        if (depth > currDepth) {
            currDepth = depth;
            currVal = tNode.val;
        }
    }

    dfs(root, 0);
    return currVal;
};
