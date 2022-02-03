/**
 * @param {number} k
 * @return {number}
 */
 var findMinFibonacciNumbers = function(k) {
    let fibSeq = [1,1];
    while (fibSeq[fibSeq.length - 1] < k) {
        fibSeq.push(fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2]);
    }

    let res = 0, cur = k;
    while (cur > 0) {
        let left = 1, right = fibSeq.length - 1;
        while (left < right) {
            let mid = Math.ceil((left+right)/2);
            if (fibSeq[mid] <= cur) left = mid;
            else right = mid - 1;
        }
        res++;
        cur -= fibSeq[left];
    }
    return res;
};

const k = 7;
console.log(findMinFibonacciNumbers(k));
