/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

let candles = [4,4,1,3]

function birthdayCakeCandles(candles) {
    let max_heigth = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i]>max_heigth) {
            max_heigth = candles[i]
        }
    }
    let cont = 0;
    for (let j = 0; j < candles.length; j++) {
        if (candles[j]==max_heigth) {
            cont = cont + 1
        }
    }
    return cont
}
res = birthdayCakeCandles(candles)
console.log(res);