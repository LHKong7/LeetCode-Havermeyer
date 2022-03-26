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
var largestValues = function(root) {
    if (root === null) return [];
    let res = [];
    let queue = [root];

    while (queue.length) {
        let levelPath = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            let treeNode = queue.shift();
            levelPath.push(treeNode.val);

            if (treeNode.left) queue.push(treeNode.left);
            if (treeNode.right) queue.push(treeNode.right);
        }
        res.push(Math.max(...levelPath));
    }

    return res;
};

