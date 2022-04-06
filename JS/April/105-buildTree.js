/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const stack = []
    const root = new TreeNode(preorder[0])
    stack.push(root)
    let inorderIndex = 0
    for (let i = 1; i < preorder.length; i++) {
        const childVal = preorder[i]
        let parentNode =stack[stack.length - 1]
        if (parentNode.val != inorder[inorderIndex]) {
            parentNode.left = new TreeNode(childVal)
            stack.push(parentNode.left)
        } else {
            while (stack.length && stack[stack.length - 1].val == inorder[inorderIndex]) {
                parentNode = stack.pop()
                inorderIndex++
            }
            parentNode.right = new TreeNode(childVal)
            stack.push(parentNode.right)
        }
    }
    return root;
};

