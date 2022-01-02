/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    let reverse = (head) => {
        let prev = null;
        let cur = head;

        while (cur !== null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
    }

    let dummyNode = new ListNode(-1);
    dummyNode.next = head;

    // go to the prev
    let prev = dummyNode;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let rightNode = prev;
    for (let j = 0; j < right - left + 1; j++) {
        rightNode = rightNode.next;
    }

    // cut the Linked List
    let leftNode = prev.next;
    let curr = rightNode.next;
    prev.next = null;
    rightNode.next = null;

    reverse(leftNode);

    prev.next = rightNode;
    leftNode.next = curr;

    return dummyNode.next;
};
