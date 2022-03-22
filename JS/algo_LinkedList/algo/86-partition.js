/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null) return head;

    let smallHead = new ListNode(-1);
    let small = smallHead;
    let largeHead = new ListNode(-1);
    let large = largeHead;

    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }

    large.next = null;
    small.next = largeHead.next;

    return smallHead.next;
};

