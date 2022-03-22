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
var sortList = function(head) {
    if (!head || !head.next) return head

    let slow = head, fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    const rightHead = slow.next
    slow.next = null

    const left = sortList(head)
    const right = sortList(rightHead)

    return mergeTwoLists(left, right)
};

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    const dummyNode = new ListNode(-1)
    let curr = dummyNode;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if (l1) curr.next = l1
    if (l2) curr.next = l2
    return dummyNode.next
};

