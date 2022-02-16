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
 var postorderTraversal = function(root) {
    if (!root) return []

    const stack = [], res = []
    stack.push(root)

    while (stack.length) {
        const curr = stack.pop()
        res.push(curr.val)
        if (curr.left) stack.push(curr.left)
        if (curr.right) stack.push(curr.right)
    }
    res.reverse()
    return res
};

var postorderTraversal = function(root) {
    let res = [];
    var postOrder = (node, res) => {
        if (node === null) return;
        postOrder(node.left, res);
        postOrder(node.right, res);
        res.push(node.val);
    }
    postOrder(root, res);
    return res;
};
