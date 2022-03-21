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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if (root === null) return false;
    let myStore = new Set();
    const dfs = (tnode) => {
        if (tnode === null) return false;

        if (myStore.has(k - tnode.val)) {
            return true;
        }
        myStore.add(tnode.val);

        return dfs(tnode.left, myStore) || dfs(tnode.right, myStore);
    }

    return dfs(root);
};

