function compareTriplets(a, b) {
    let score = [0, 0];
    if (a[0] > b[0]) {
        score[0]++;
    } else if (a[0] < b[0]) {
        score[1]++;
    }

    if (a[1] > b[1]) {
        score[0]++;
    } else if (a[1] < b[1]) {
        score[1]++;
    }

    if (a[2] > b[2]) {
        score[0]++;
    } else if (a[2] < b[2]) {
        score[1]++;
    }

    return score;
}
