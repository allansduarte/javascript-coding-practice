// O(n^2) time | O(1) space
function divisibleSumPairs(n, k, ar) {
    let counter = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                counter++;
            }
        }
    }

    return counter;
}