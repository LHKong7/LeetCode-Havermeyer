/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const finalPrices = [];
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length-1] > prices[i]) {
            stack.pop();
        }

        const afterDiscount = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length-1];
        stack.push(prices[i]);
        finalPrices.unshift(afterDiscount)
    }

    return finalPrices;
};
