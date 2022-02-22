/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 


 *
 * TestCase: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * Explanation:
 * *****************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
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
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

