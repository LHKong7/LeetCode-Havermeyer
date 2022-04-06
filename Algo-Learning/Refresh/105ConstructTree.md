# 105



preOrder: root-left-right 

inOrder: left-root-right

postOrder: left-right-root



从前序遍历中找到根节点

从中序遍历中找到左子树



遍历前序遍历的节点 用于构建节点，使用中序遍历确定是创建的节点的左子树或右子树：

- 当节点是中序遍历左边的“节点”  -> 左子树
- 当节点是中序遍历右边的“节点” 找到最近的“根节点”  成为-> 右子树



stack ： 保存前序遍历的所有节点，当中序遍历中出现 ”右子树“时 pop the stack。pop直到中序遍历的节点不等于栈顶的值，找到的值是右子树的节点。

