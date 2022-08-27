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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let maxWidth = 0;
    let queue = [[root, BigInt(1)]];
    while (queue.length) {
        const size = queue.length;
        let startIdx = BigInt(0), endIdx = BigInt(0);

        for (let i = 0; i < size; i++) {
            let [node, idx] = queue.shift();

            if (i === 0) startIdx = idx;
            if (i === size-1) endIdx = idx;

            if (node.left) queue.push([node.left, BigInt(idx * BigInt(2))]);
            if (node.right) queue.push([node.right, BigInt(idx * BigInt(2) + BigInt(1))]);
        }

        maxWidth = Math.max(maxWidth, Number(endIdx-startIdx)+1);
    }

    return maxWidth;
};

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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    let lvMin = {};

    const dfs = (node, depth, idx) => {
        if (node === null) return 0;
        if (!lvMin[depth]) lvMin[depth] = idx;

        return Math.max(idx-lvMin[depth]+1, dfs(node.left, depth+1, idx*2), dfs(node.right, depth+1, idx*2+1));
    }

    return dfs(root, 1, 1);
};
