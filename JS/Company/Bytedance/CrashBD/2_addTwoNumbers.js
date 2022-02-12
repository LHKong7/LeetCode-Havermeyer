var ListNode = function(value, next) {
    this.val = (value === undefined ? 0 : value);
    this.next = (next === undefined ? null : next);
}

var addTwoNumber = (l1, l2) => {
    let head = null, tail = null;
    let carry = 0;

    while (l1 || l2) {
        let nodeOne = l1 ? l1.val : 0;
        let nodeTwo = l2 ? l2.val : 0;
        let sum = nodeOne + nodeTwo + carry;

        if (sum >= 10) {
            if (!head) {
                head = tail = new ListNode(sum % 10);
            } else {
                tail = new ListNode(sum % 10);
                tail = tail.next;
            }
        }
        tail = new ListNode(sum);
        tail = tail.next;

        if (l1 !== null) {
            l1 = l1.next;
        }

        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    return head;
}
