/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let prev = null, next = null;
    let dummyHead = list1, head = list1;
    let dummyHead2 = list2;
    for (let i = 0; i < a-1; i++) {
        dummyHead = dummyHead.next;
    }
    prev = dummyHead;

    for (let j = 0; j < b-a+2; j++) {
        dummyHead = dummyHead.next;
    }
    next = dummyHead;

    while (dummyHead2.next) {
        dummyHead2 = dummyHead2.next;
    }

    prev.next = list2;
    dummyHead2.next = next;

    return head;
};
