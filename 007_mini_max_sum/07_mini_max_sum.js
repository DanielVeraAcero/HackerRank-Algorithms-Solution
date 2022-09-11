/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/* let arr = [3,5,9,7,1]

function miniMaxSum(arr) {
    arr.sort(function(one,two){return(one-two)});
    let min = 0;
    let max = 0;
    for (let i = 0; i < 2; i++) {
        if (i == 0) {
            for (let j = 0; j < arr.length-1; j++) {
                min = min + arr[j]
            }
        } else {
            for (let k = 1; k < arr.length; k++) {
                max = max + arr[k] 
            }
        }        
    }
    console.log(min+"  "+max);
}

miniMaxSum(arr) */

let arr = [3,5,9,7,1]

function miniMaxSum(arr) {
    arr.sort(function(one,two){return(one-two)});
    let min = 0;
    let max = 0;
    for (let j = 0; j < arr.length-1; j++) {
        min = min + arr[j]
    }
    for (let k = 1; k < arr.length; k++) {
        max = max + arr[k] 
    }
    console.log(min+"  "+max);
}
miniMaxSum(arr)


