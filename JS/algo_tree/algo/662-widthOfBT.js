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
    if (root === null) return 0;
    let queue = [[root, BigInt(1)]];
    let res = 0;

    while (queue.length) {
        const size = queue.length;
        let startIdx = BigInt(0), endIdx = BigInt(0);

        for (let i = 0; i < size; i++) {
            let [treeNode, seqNumber] = queue.shift();

            if (i === 0) startIdx = seqNumber;
            if (i === size-1) endIdx = seqNumber;

            if (treeNode.left) {
                queue.push([treeNode.left, BigInt(seqNumber * BigInt(2))]);
            }
            if (treeNode.right) {
                queue.push([treeNode.right, BigInt(seqNumber * BigInt(2) + BigInt(1))]);
            }
        }

        res = Math.max(res, Number(endIdx-startIdx)+1);
    }

    return res;
};

