

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parrameters:
 *  1. INTEGER n
 *  2. INTEGER_arrRAY arr
 */

function sockMerchant(arr) {
    arr.sort(function(a,b){return a - b;});
    console.log(arr);

    let inFreq = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i-1]) {
            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count = count + 1;               
                }
            }
            inFreq.push([arr[i],count])
        }
    }

    let countPairs = 0;

    for (let k = 0; k < inFreq.length; k++) {
        let numPairs = inFreq[k][1]/2;
        let numPairsRound = Math.floor(numPairs)
        if (numPairsRound > 0) {
            countPairs = countPairs + numPairsRound;
        }
    }
    console.log(countPairs);
    return countPairs    
}
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));
