/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [1, 4, 4, 4, 5, 3]

function migratoryBirds(arr) {
    arr.sort(function(a,b){return a - b;});

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
    console.log(inFreq);

    let maxFreq = [];
    let max = 0;

    for (let k = 0; k < inFreq.length; k++) {
        if (inFreq[k][1] > max) {
            max = inFreq[k][1]
            maxFreq = inFreq[k]
        }
    }
    return maxFreq[0]   
}

console.log(migratoryBirds(arr));
