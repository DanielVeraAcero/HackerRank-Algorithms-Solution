/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
let n = 4;

let hashString = '#'
let spaceString = ' '

for (let i = 1; i <= n; i++) {
    let cantHash = hashString.repeat(i);
    let cantSpace = spaceString.repeat(n-i);
    console.log(cantSpace+cantHash);
}
