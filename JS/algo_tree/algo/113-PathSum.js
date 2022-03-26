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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];

    const numsSum = (sums) => {
        let currSum = 0;
        for (let num of sums) {
            currSum += num;
        }

        return currSum;
    }

    const dfs = (treeNode, path) => {
        if (treeNode === null) {
            return false;
        }

        path.push(treeNode.val)
        if (treeNode.left === null && treeNode.right === null && (targetSum - numsSum(path)) === 0) {
            res.push(Array.from(path));
        }
        dfs(treeNode.left, path);
        dfs(treeNode.right, path);
        path.pop();
    }

    dfs(root, []);
    return res;
};

