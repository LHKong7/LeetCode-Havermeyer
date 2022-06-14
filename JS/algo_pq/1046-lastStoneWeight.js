/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) { // O(n^2logn)
    const n = stones.length;

    for (let i = 0; i < n-1; i++) {
        stones.sort((a, b) => a - b);

        let y = stones[n-1];
        let x = stones[n-2];
        if (x === 0) break;
        stones[n-1] = y-x;
        stones[n-2] = 0;
    }

    return stones[n-1];
};

/**
 * JAVA PQ O(nlogn)
class Solution {
    public int lastStoneWeight(int[] stones) {
        int n = stones.length;
        if (n == 1) return stones[0];

        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a); // MAX heap
        for (int stone: stones) pq.add(stone);

        while (pq.size() > 1) {
            int y = pq.remove();
            int x = pq.remove();
            int diff = y - x;
            if (diff > 0) pq.add(diff);
        }

        return pq.isEmpty() ? 0 : pq.peek();
    }
}

 */
