/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let curr = head;
    let prev = dummyHead;
    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr.next = null;
        } else {
            prev = curr;
        }
        curr = prev.next;
    }

    return dummyHead.next;
};
