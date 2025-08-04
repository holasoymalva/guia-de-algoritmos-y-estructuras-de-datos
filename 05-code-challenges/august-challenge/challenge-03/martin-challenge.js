var maxTotalFruits = function(fruits, startPos, k) {

    let n = fruits.length;
    let pos = fruits.map(f => f[0]);
    let amt = fruits.map(f => f[1]);

    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        prefix[i+1] = prefix[i] + amt[i];
    }

    let ans = 0;

    function lowerBound(arr, val) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            let mid = (lo + hi) >> 1;
            if (arr[mid] < val) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    function upperBound(arr, val) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            let mid = (lo + hi) >> 1;
            if (arr[mid] <= val) lo = mid + 1;
            else hi = mid;
        }
        return lo-1;
    }

    for (let stepsLeft = 0; stepsLeft <= k; ++stepsLeft) {

        let left = startPos - stepsLeft;
        let remainingSteps = k - stepsLeft * 2;
        let right = startPos + Math.max(0, remainingSteps);

        let lIdx = lowerBound(pos, left);
        let rIdx = upperBound(pos, right);
        if (lIdx <= rIdx) {
            ans = Math.max(ans, prefix[rIdx + 1] - prefix[lIdx]);
        }
    }

    for (let stepsRight = 0; stepsRight <= k; ++stepsRight) {
        let right = startPos + stepsRight;
        let remainingSteps = k - stepsRight * 2;
        let left = startPos - Math.max(0, remainingSteps);

        let lIdx = lowerBound(pos, left);
        let rIdx = upperBound(pos, right);
        if (lIdx <= rIdx) {
            ans = Math.max(ans, prefix[rIdx + 1] - prefix[lIdx]);
        }
    }
    return ans;
};