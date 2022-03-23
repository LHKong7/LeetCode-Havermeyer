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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];

    let queue = [root];
    let res = [];

    while (queue.length) {
        let path = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const treeNode = queue.shift();
            path.push(treeNode.val);

            if (treeNode.left) queue.push(treeNode.left);
            if (treeNode.right) queue.push(treeNode.right);
        }

        res.push(path);
    }

    return res;
};

