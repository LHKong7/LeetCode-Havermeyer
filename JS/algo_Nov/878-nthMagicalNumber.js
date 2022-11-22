/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    const MOD = 1000000007;
    const c = lcm(a, b);
    const m = Math.floor(c / a) + Math.floor(c / b) - 1;
    const r = n % m;
    const res = c * Math.floor(n / m) % MOD;
    if (r === 0) {
        return res;
    }
    let addA = a, addB = b;
    for (let i = 0; i <  r - 1; ++i) {
        if (addA < addB) {
            addA += a;
        } else {
            addB += b;
        }
    }
    return (res + Math.min(addA, addB) % MOD) % MOD;
}

const lcm = (a, b) => {
    return Math.floor(a * b / gcd(a, b));
}

const gcd = (a, b) => {
    return b !== 0 ? gcd(b, a % b) : a;
};
