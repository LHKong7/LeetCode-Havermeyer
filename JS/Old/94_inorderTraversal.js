var inorderTraversal = function(root) {
    let res = [];
    if (root === null) return res;
    let stack = [];
    let curr = root;

    while (curr !== null || stack.length !== 0) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        let treeNode = stack.pop();
        res.push(treeNode.val);

        curr = treeNode.right;
    }

    return res;
};

var inorderTraversal_recursive = function(root) {
    let res = [];
    var inOrder = (node, res) => {
        if (node === null) return;
        inOrder(node.left, res);
        res.push(node.val);
        inOrder(node.right, res);
    }
    inOrder(root, res);
    return res;
};
