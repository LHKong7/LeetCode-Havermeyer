var removeElements = function(head, val) {
  let dummyNode = new ListNode(-1, head);

  let prev = dummyNode;
  while (head != null) {
    if (head.val === val) { // remove the node
      prev.next = head.next;
      head.next = null;
    } else {
      prev = head;
    }

    head = prev.next;
  }

  return dummyNode.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  // delete head node
  while (head !== null && head.val === val) {
      let delNode = head;
      head = head.next;
      delNode.next = null;
  }
  if (head === null) return null;

  // delete nonHead node
  let curr = head.next;
  let prev = head;
  while (curr !== null) {
      if (curr.val === val) {
          prev.next = curr.next;
          curr.next = null;
      } else {
          prev = curr;
      }
      curr = prev.next;
  }

  return head;
};

