/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */
n = 6;
k = 3;
ar = [1, 3, 2, 6, 1, 2];
//   [0, 1, 2, 3, 4, 5];

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j && (ar[i]+ar[j])%k == 0) {
                console.log(ar[i]+","+ar[j]);
                count = count + 1;
            }
        }
    }
    return count;
}

console.log(divisibleSumPairs(n, k, ar));
