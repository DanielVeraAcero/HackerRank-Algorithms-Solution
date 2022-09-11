/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

let candles = [4,4,1,3]

function birthdayCakeCandles(candles) {
    candles.sort((a,b)=>b-a);
    unitTallCandle = candles[0];
    return tallestCandles = candles.filter(item=>item == unitTallCandle).length
}
res = birthdayCakeCandles(candles)
console.log(res);