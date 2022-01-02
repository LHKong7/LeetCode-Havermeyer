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
 *  给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字。
 *
 * TestCase:    n: 13   k: 2
 * Output: 10
 * Explanation: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
 * *****************************************************************/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 function findKthNumber(n, k) {
    /** 当前探索的出发点，在我们脑中的十叉树中，从这个数字开始往下先序遍历 */
    let result = 1;
    
    /** 剩余探索步数，等这个值为 0 的时候，就说明 result 已经踩在了我们要的数字上 */
    let lastingSteps = k - 1; // 我们的 result 从 1 开始，就已经走了一步了
    while (lastingSteps > 0) {
        // 数一数先序遍历的话，从当前节点到自己的下一个兄弟节点，中间要经过几个子节点
        /** 最多能经过的子节点数，我们尝试扩大这个数，跳过尽量多的子节点 */
        let numberOfSubNode = 0;
        /** 向下展开当前节点（得到 10 11 12 13 等子节点），得到的子树中左下角的那个节点 */
        let expandedChildrenStart = result;
        /** 当前节点的下一个兄弟节点，比如 1 的，就是 2 */
        let expandedChildrenEnd = result + 1;
        // 只要向下展开后，最左下角的那个子节点的数字的量级没有超过 n ，我们就尽量往下展开
        while (expandedChildrenStart <= n) {
            // 如果当前探索的出发点的子节点形成完全十叉树，Math.min 会取 expandedChildrenEnd，说明子树中就是有这么多个节点
            // Math.min 如果取到 n + 1 ，说明形成完全十叉树所需的节点比 n 还大，那么子树就是不完全的十叉树
            numberOfSubNode += Math.min(expandedChildrenEnd, n + 1) - expandedChildrenStart;
            // 计算十叉树再展开一层子节点之后，子节点的数量
            // 如果这次展开之后，下一次 expandedChildrenEnd 大于 n + 1 ，就说明有一层节点数量不够形成完全十叉树了
            expandedChildrenStart *= 10;
            expandedChildrenEnd *= 10;
        }
        
        // 计算完当前节点到下一个兄弟节点之间有多少个，我们就能把这个量加到 result 上，从而把 result 对应的十叉树节点指针，移动到指向下一个兄弟节点
        // 如果发现展开后，当前位置的子节点的数量巨多，大于我们剩余的步数
        if (numberOfSubNode > lastingSteps) {
            // 就把当前探索出发点 result 这个指针在十叉树里下移一层
            result *= 10;
            // 指针下移一层，等价于先序遍历走了一步，所以剩余步数减一
            lastingSteps -= 1;
        } else {
            // 如果发现子节点数量小于剩余步数，那么我们就把指针往右移动，跳过整棵子树
            result += 1;
            // 跳过子树相当于跳过这么多个子节点
            lastingSteps -= numberOfSubNode;
        }
    }
    return result;
};


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    // let getCount = (prefix, n) => {
    //     let count = 0;

    //     for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10) {
    //         count += Math.min(next, n+1) - cur;
    //     }

    //     return count;
    // }
    var getCount = (prefix, n) => {
        let cur = prefix;
        let next = prefix + 1;//下一个前缀
        let count = 0;
        //当前的前缀当然不能大于上界
        while(cur <= n) {
            count += next - cur;//下一个前缀的起点减去当前前缀的起点
            cur *= 10; 
            next *= 10;
            // 如果说刚刚prefix是1，next是2，那么现在分别变成10和20
            // 1为前缀的子节点增加10个，十叉树增加一层, 变成了两层
            
            // 如果说现在prefix是10，next是20，那么现在分别变成100和200，
            // 1为前缀的子节点增加100个，十叉树又增加了一层，变成了三层
        }
        return count;//把当前前缀下的子节点和返回去。
    }
    
    let p = 1;
    let prefix = 1;

    while(p < k) {
        let count = getCount(prefix, n);
        if(p + count > k) {
            prefix *= 10;
            p++;
        } else if(p + count <= k) {
            prefix ++;
            p += count;
        }
  }
  
  return prefix;
};

var getCount = (prefix, n) => {
    let cur = prefix;
    let next = prefix + 1;//下一个前缀
    console.log("Cur, next: ", cur, next);
    let count = 0;
    //当前的前缀当然不能大于上界
    while(cur <= n) {
        console.log('Math.min(n+1, next): ', Math.min(n+1, next))
        count += Math.min(n+1, next) - cur;//下一个前缀的起点减去当前前缀的起点
        cur *= 10; 
        next *= 10;
        // 如果说刚刚prefix是1，next是2，那么现在分别变成10和20
        // 1为前缀的子节点增加10个，十叉树增加一层, 变成了两层
        
        // 如果说现在prefix是10，next是20，那么现在分别变成100和200，
        // 1为前缀的子节点增加100个，十叉树又增加了一层，变成了三层
    }
    return count;//把当前前缀下的子节点和返回去。
}

let findKthNumber_Test = function(n, k) {
    let p = 1;//作为一个指针，指向当前所在位置，当p==k时，也就是到了排位第k的数
    let prefix = 1;//前缀
    while(p < k) {
      let count = getNumber(prefix, n);//获得当前前缀下所有子节点的和
      if(p + count > k) { //第k个数在当前前缀下
        prefix *= 10;
        p++; //把指针指向了第一个子节点的位置，比如11乘10后变成110，指针从11指向了110
      } else if(p + count <= k) { //第k个数不在当前前缀下
        prefix ++;
        p += count;//注意这里的操作，把指针指向了下一前缀的起点
      }
    }
    return prefix;
};

console.log(getCount(1, 12))

/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

