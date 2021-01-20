// O(n) time | O(1) space
function breakingRecords(scores) {
    let highest = scores[0];
    let highestCounter = 0;
    let lowest = scores[0];
    let lowestCounter = 0;
    for (let i = 1; i < scores.length; i++) {
        if (highest < scores[i]) {
            highest = scores[i];
            highestCounter++;
        }

        if (lowest > scores[i]) {
            lowest = scores[i];
            lowestCounter++;
        }
    }

    return [highestCounter, lowestCounter];
}
