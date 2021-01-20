// O(n) time | O(1) space
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(countApplesAndOrangesHelper(apples, a, s, t));
    console.log(countApplesAndOrangesHelper(oranges, b, s, t));
}

// O(n) time | O(1) space
function countApplesAndOrangesHelper(fruits, treePosition, initialPositionHouse, finalPositionHouse) {
    let counter = 0;
    for (let i = 0; i < fruits.length; i++) {
        const fruitLandedPosition = treePosition + fruits[i];
        if (fruitLandedPosition >= initialPositionHouse && fruitLandedPosition <= finalPositionHouse) {
            counter++;
        }
    }
    return counter;
}
