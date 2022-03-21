/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || !head.next || k == 0 || k == 1) {
        return head
    }

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
    let prev = dummyNode, first = head, last = head;

    while (first) {
        for (let i = 0; i < k-1; i++) {
            last = last.next;
            if (!last) return dummyNode.next;
        }

        let next = last.next;
        last.next = null;

        reverse(first);

        prev.next = last;
        first.next = next;

        prev = first;
        first = next;
        last = first;
    }

    return dummyNode.next;
};

