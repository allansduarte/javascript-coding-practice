// Best O(n) time | O(1) space
// Worst O(n^2) time | O(1) space
function simpleArraySum(ar) {
    return ar.reduce((acc, currentValue) => acc + currentValue);
}
