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
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) { // root-left-right
    let res = [];
    if (root === null) return res;
    let stack = [];
    stack.push(root);

    while (stack.length !== 0) {
        let treeNode = stack.pop();
        res.push(treeNode.val);
        if (treeNode.right) stack.push(treeNode.right);
        if (treeNode.left) stack.push(treeNode.left);
    }

    return res;
};

var preorderTraversal_recursive = function(root) {
    let res = [];
    var preOrder = (node, res) => {
        if (node === null) return;
        res.push(node.val);
        preOrder(node.left, res);
        preOrder(node.right, res);
    }
    preOrder(root, res);
    return res;
};




/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

