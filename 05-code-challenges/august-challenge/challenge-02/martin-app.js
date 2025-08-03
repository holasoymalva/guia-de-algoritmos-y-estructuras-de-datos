var minCost = function(basket1, basket2) {
    const count = new Map();
    let minVal = Infinity;
    for (const x of basket1) {
        count.set(x, (count.get(x) || 0) + 1);
        minVal = Math.min(minVal, x);
    }
    for (const x of basket2) {
        count.set(x, (count.get(x) || 0) - 1);
        minVal = Math.min(minVal, x);
    }
    const swap = [];
    for (const [v, c] of count.entries()) {
        if (c % 2 !== 0) return -1;
        for (let i = 0; i < Math.abs(c) / 2; ++i) {
            swap.push(v);
        }
    }
    swap.sort((a, b) => a - b);
    const n = swap.length / 2;
    let res = 0;
    for (let i = 0; i < n; ++i) {
        res += Math.min(swap[i], swap[swap.length - 1 - i], 2 * minVal);
    }
    return res;
};