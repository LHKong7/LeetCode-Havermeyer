/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if (!root) return root;

    let queue = [root];

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            let tNode = queue.shift();

            if (i < size-1) {
                tNode.next = queue[0];
            }

            if (tNode.left) queue.push(tNode.left);
            if (tNode.right) queue.push(tNode.right);
        }
    }

    return root;
};
