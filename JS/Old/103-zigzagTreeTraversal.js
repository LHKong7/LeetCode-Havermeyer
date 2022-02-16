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
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];
    let directionLeft = true; // true is left false is right

    while (queue.length !== 0) {
        let path = [];
        const queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            let treeNode = queue.shift();
            path.push(treeNode.val);

            if (treeNode.left) {
                queue.push(treeNode.left);
            }

            if (treeNode.right) {
                queue.push(treeNode.right);
            }
        }
        if (directionLeft) {
            res.push(path);
        } else {
            res.push(path.reverse());
        }
        directionLeft = !directionLeft;
    }

    return res;
};
