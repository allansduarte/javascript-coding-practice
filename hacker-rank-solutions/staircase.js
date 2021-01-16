function staircase(n) {
    let stairsDrawn = 1;
    while (stairsDrawn <= n) {
        console.log(" ".repeat(n - stairsDrawn) + "#".repeat(stairsDrawn));
        stairsDrawn++;
    }
}
