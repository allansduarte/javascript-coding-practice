function birthdayCakeCandles(candles) {
    let tallestCandle = 0;
    let tallestCandleCounter = 0;
    for(let candle of candles) {
        if (candle > tallestCandle) {
            tallestCandle = candle;
            tallestCandleCounter = 1;
        } else if (candle === tallestCandle) {
            tallestCandleCounter++;
        }
    }
    
    return tallestCandleCounter;
}
