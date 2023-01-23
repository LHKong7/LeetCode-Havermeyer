/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let total = 0;
    let lower = 0;

    if (income === 0) return 0;
    for (let bracket of brackets) {
        const upper = bracket[0], taxPercentage = bracket[1];
        const tax = (Math.min(income, upper) - lower) * taxPercentage;
        total += tax;
        if (income <= upper) break;
        lower = upper;
    }

    return total / 100.00;
};
