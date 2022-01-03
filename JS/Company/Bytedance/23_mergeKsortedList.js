/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var mergeTwoList = (headOne, headTwo) => {
    let dummyNode = new ListNode(-1);
    let cur = dummyNode;

    while (headOne !== null && headTwo !== null) {
        if (headOne.val < headTwo.val) {
            cur.next = headOne;
            headOne = headOne.next;
        } else {
            cur.next = headTwo;
            headTwo = headTwo.next;
        }
        cur = cur.next;
    }

    cur.next = headOne || headTwo;

    return dummyNode.next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res = null;

    for (let k = 0; k < lists.length; k++) {
        res = mergeTwoList(res, lists[k]);
    }

    return res;
};
