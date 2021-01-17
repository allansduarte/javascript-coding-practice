function shapeArea(n) {
    if (n < 1 || n > 10000) return;

    return n === 1 ? 1 : shapeArea(n - 1) + (n - 1) * 4;
}
