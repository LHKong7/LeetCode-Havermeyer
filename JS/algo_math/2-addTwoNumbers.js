/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;

    while (l1 || l2) {
        let node1Val = l1 ? l1.val : 0;
        let node2Val = l2 ? l2.val : 0;

        let sum = node1Val + node2Val + carry;

        if (head === null) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }

        if (sum >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry === 1) tail.next = new ListNode(1);

    return head;
};
