/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, visited = new Map()) {
    if (head === null) return null;

    let newNode = new Node(head.val);
    visited.set(head, newNode);

    newNode.next = copyRandomList(head.next, visited);
    newNode.random = visited.get(head.random);

    return newNode;
};

