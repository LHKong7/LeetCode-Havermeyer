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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let len = 0;
    let curr = head;
    while (curr !== null) {
        len++;
        curr = curr.next;
    };

    let width = Math.floor(len / k);
    let remainder = len % k; // remainder groups
    let res = [];
    curr = head;
    for (let i = 0; i < k; i++) {
        let dummyNode = new ListNode(-1);
        let node = dummyNode;

        let realWidth = width + (i < remainder ? 1 : 0);
        for (let j = 0; j < realWidth; j++) {
            node.next = new ListNode(curr.val);
            node = node.next;

            if (curr !== null) curr = curr.next;
        }

        res.push(dummyNode.next);
    }

    return res;
};

