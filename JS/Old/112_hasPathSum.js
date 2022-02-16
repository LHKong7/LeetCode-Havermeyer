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
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let res = [];
    let paths = [];

    const dfs = (tNode, ppath, pres) => {
        if (tNode === null) return;

        ppath.push(tNode.val);
        if (tNode.left === null && tNode.right === null) {
            pres.push(Array.from(ppath));
        }
        dfs(tNode.left, ppath, pres);
        dfs(tNode.right, ppath, pres);

        ppath.pop();
    }

    dfs(root, res, paths);

    for (path of paths) {
        let sum = 0;
        for (val of path) {
            sum += val;
        }
        if (sum === targetSum) {
            return true;
        }
    }

    return false;
};

var hasPathSum1 = function(root, targetSum) {

    const dfs = (tNode, val) => {
        if (tNode === null) return false;

        let currVal = val - tNode.val;
        if (tNode.left === null && tNode.right === null) {
            return currVal === 0;
        }
        let leftPS = dfs(tNode.left, currVal);
        if (leftPS) return true;
        let rightPS = dfs(tNode.right, currVal);

        return leftPS || rightPS;
    };

    return dfs(root, targetSum);
};
