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
 var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    let res = [];

    while (queue.length > 0) {
        let len = queue.length;

        while (len) {
            let node = queue.shift();
            
            if (len === 1) {
                res.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            len -= 1;
        }
    }
    
    return res;
};