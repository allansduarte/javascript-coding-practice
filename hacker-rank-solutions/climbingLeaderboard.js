// O(n log(n)) time | O(1) space
function climbingLeaderboard(scores, alice) {
    const uniqueScores = Array.from(new Set(scores));
    let rank = [];
    for (const score of alice) {
        if (score >= uniqueScores[0]) {
            rank.push(1);
        } else if (score < uniqueScores[uniqueScores.length - 1]) {
            rank.push(uniqueScores.length + 1);
        } else {
            rank.push(rankBinarySearch(score, uniqueScores));
        }
    }

    return rank;
}

function rankBinarySearch(score, uniqueScores) {
    let start = 0;
    let end = uniqueScores.length - 1;
    while (true) {
        let mid = Math.floor((start + end) / 2);

        if (uniqueScores[mid] === score) {
            return mid + 1;
        } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
            return mid + 2;
        } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
            return mid - 1;
        }

        if (score < uniqueScores[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}
