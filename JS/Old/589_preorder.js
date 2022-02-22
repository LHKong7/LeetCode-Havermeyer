/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [root];

    while (stack.length) {
        const ele = stack.pop();
        res.push(ele.val);

        let n = ele.children.length;
        while (n) {
            n--;
            stack.push(ele.children[n]);
        }
    }

    return res;
};