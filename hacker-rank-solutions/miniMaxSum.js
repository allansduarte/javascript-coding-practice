// O(n log(n)) time | O(1) space
function miniMaxSum(arr) {
    arr.sort();
    const minimumSum = arr[0] + arr [1] + arr[2] + arr[3];
    const maximumSum = arr[1] + arr [2] + arr[3] + arr[4];

    console.log(`${minimumSum} ${maximumSum}`);
}
