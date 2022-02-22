/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(-1);
    let head = dummyNode;

    while (list1 && list2) {
        if (list1.val >= list2.val) {
            head.next = list2;
            list2 = list2.next;
        } else {
            head.next = list1;
            list1 = list1.next;
        }
        head = head.next;
    }

    head.next = list1 === null ? list2 : list1;

    return dummyNode.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res = null;
    for (let i = 0; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i]);
    }
    return res;
};
