/*
 * Delete a node in LinkedList
 */

var deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
}

