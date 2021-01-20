// O(n) time | O(1) space
function adjacentElementsProduct(inputArray) {
    if (inputArray.length < 2 || inputArray.length > 10) return;

    let largestAdjacentElements = [null, null, null];
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < -1000 || inputArray[i] > 1000) return;

        if (!largestAdjacentElements[2] || inputArray[i - 1] * inputArray[i] > largestAdjacentElements[2]) {
            largestAdjacentElements[0] = inputArray[i - 1];
            largestAdjacentElements[1] = inputArray[i];
            largestAdjacentElements[2] = inputArray[i] * inputArray[i - 1];
        }
    }

    return largestAdjacentElements[2];
}
