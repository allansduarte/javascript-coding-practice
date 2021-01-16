function plusMinus(arr) {
    let numPositive = 0;
    let numNegative = 0;
    let numNeutral = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numPositive++;
        } else if (arr[i] < 0) {
            numNegative++;
        } else {
            numNeutral++;
        }
    }
    
    console.log(numPositive/arr.length);
    console.log(numNegative/arr.length);
    console.log(numNeutral/arr.length);
}
