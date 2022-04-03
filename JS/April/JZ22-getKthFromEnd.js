/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let slow = head, fast = head;

    while (fast && k > 0) {
        fast = fast.next;
        k = k - 1;
    };

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
};

