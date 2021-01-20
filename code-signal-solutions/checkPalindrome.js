// O(1) time | O(1) space
function checkPalindrome(inputString) {
    if (inputString.length < 1 || inputString.length > 100000) return;

    return inputString.split('').reverse().join('') === inputString;
}
