arr = [1,2,3];

function simpleArraySum(ar) {
    return ar.reduce((acc,item) => acc += item)
}

console.log(simpleArraySum(arr));