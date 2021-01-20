// O(1) time | O(1) space
function centuryFromYear(year) {
    if (year < 1 && year < 2006) return;

    return Math.ceil(year / 100);
}
