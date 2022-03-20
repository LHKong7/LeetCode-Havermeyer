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

    let dummyNode = new ListNode(-1, head);
    let prev = dummyNode;
    let curr = head;

    while (curr !== null) {
        if (curr.next !== null && curr.val === curr.next.val) {
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next;
            }
            prev.next = curr.next;
            curr.next = null;
        } else {
            prev  = curr;
        }
        curr = prev.next;
    }

    return dummyNode.next;
};

