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
    if (head === null) return head;

    const reverse = (head) => {
        if (head === null) return head;
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return;
    }

    let dummyNode = new ListNode(-1, head);
    let prevNode = dummyNode;
    for (let i = 0; i < left - 1; i++) {
        prevNode = prevNode.next;
    }
    headNode = prevNode.next;

    let tailNode = headNode;
    for (let i = 0; i < right - left; i++) {
        tailNode = tailNode.next;
    }
    let postNode = tailNode.next;

    // cuttttt offffff
    prevNode.next = null;
    tailNode.next = null;

    reverse(headNode);
    prevNode.next = tailNode;
    headNode.next = postNode;

    return dummyNode.next;
};

