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
 *  定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 *
 * TestCase: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
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
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current != null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

