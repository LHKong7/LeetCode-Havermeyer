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

    let dummyNode = new ListNode(-1, head);
    let slow = dummyNode, fast = dummyNode;
    while (n >= 0) {
        fast = fast.next;
        n -= 1;
    }

    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }

    let delNode = slow.next;
    slow.next = delNode.next;
    delNode.next = null;


    return dummyNode.next;
};

