/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const res = [];
    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        const level = [];
        for (let i = 0; i < size; i++) {
            const treeNode = queue.shift();
            level.push(treeNode.val);

            for (const child of treeNode.children) {
                queue.push(child);
            }
        }

        res.push(level);
    }

    return res;
};

