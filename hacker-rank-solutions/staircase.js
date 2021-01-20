// O(n) time | O(1) space
function staircase(n) {
    let stairsDrawn = 1;
    while (stairsDrawn <= n) {
        console.log(" ".repeat(n - stairsDrawn) + "#".repeat(stairsDrawn));
        stairsDrawn++;
    }
}
