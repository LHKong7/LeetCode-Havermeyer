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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var preOrder = (root, res) => { // root-left-right
    if (root !== null) {
        res.push(root);
        preOrder(root.left, res);
        preOrder(root.right, res);
    }
}
var flatten = function(root) {
    let listRes = [];
    preOrder(root, listRes);

    for (let i = 1; i < listRes.length; i++) {
        if (listRes[i] !== null) {
            const prev = listRes[i-1], cur = listRes[i];
            prev.left = null;
            prev.right = cur;
        }
    }
};
