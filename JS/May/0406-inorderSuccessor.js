/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let stk = [];
    let prev = null, curr = root;
    while (stk.length || curr) {
        while (curr) {
            stk.push(curr);
            curr = curr.left;
        }

        curr = stk.pop();
        if (prev === p) {
            return curr;
        }
        
        prev = curr;
        curr = curr.right;
    }

    return null;
};
