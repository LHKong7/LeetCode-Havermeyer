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

