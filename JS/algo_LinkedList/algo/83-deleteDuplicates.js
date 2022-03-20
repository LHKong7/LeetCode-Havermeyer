/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) return null;

    let prev = head;
    let curr = head.next;
    while (curr !== null) {
        if (curr.val === prev.val) {
            prev.next = curr.next;
            curr.next = null;
        } else {
            prev = curr;
        }

        curr = prev.next;
    }

    return head;
};

