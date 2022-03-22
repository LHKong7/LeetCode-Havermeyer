
const copyLinkedList_iter = (head) => {
  if (head === null) return null;

  let oldNode = head;
  let newNode = new ListNode(oldNode.val);
  let newHead = newNode;

  while (oldNode !== null && oldNode.next !== null) {
    newNode.next = new ListNode(oldNode.next.val);

    oldNode = oldNode.next;
    newNode = newNode.next;
  }

  return newHead;
}

const copyLinkedList_recursive = (head) => {
  if (head === null) return null;

  let newNode = new ListNode(head.val);
  let p = copyLinkedList_recursive(head.next);
  newNode.next = p;

  return newNode;
}

