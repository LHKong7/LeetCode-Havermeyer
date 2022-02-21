/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if (head === null) return null;
    if (head && head.next === null && n === 1) return null;

    let dummyNode = new ListNode(-1, head);

    const getLen = (node) => {
        let length = 0;

        while (node) {
            length += 1;
            node = node.next;
        }

        return length;
    }

    let curr = dummyNode;
    let length = getLen(head);
    for (let i = 1; i < length-n+1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;

    return dummyNode.next;
};
