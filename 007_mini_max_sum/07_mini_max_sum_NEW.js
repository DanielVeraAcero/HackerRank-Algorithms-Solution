

let arr = [3,5,9,7,1]

function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b)
    let mini = arr.reduce((acc,item)=> acc+=item) - arr[arr.length-1]
    let max = arr.reduce((acc,item)=> acc+=item) - arr[0]
    console.log(mini + " " + max);
}

miniMaxSum(arr)


