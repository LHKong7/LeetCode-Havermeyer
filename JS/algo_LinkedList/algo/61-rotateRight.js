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
var rotateRight = function(head, k) {
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

        return prev;
    }

    if (head === null || head.next === null || k == 0) return head;
    let len = 0;
    let curr = head;
    while (curr !== null) {
        len++;
        curr = curr.next;
    }

    if (k % len === 0) return head;
    k = k % len;

    let newHead = reverse(head);
    let kthNode = newHead;

    for (let i = 0; i < k - 1; i++) {
        kthNode = kthNode.next;
    }

    let halfHead = kthNode.next;
    kthNode.next = null;

    let res = reverse(newHead);
    newHead.next = reverse(halfHead);

    return res;
};

