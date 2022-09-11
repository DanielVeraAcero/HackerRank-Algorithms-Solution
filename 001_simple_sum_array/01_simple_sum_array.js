var result = simple_array_sum([1,2,3,4,5])

function simple_array_sum(ar) {
    let sum_ar = 0;
    for (i=0; i<ar.length ;i++) {
        sum_ar = sum_ar + ar[i];
    }
    return sum_ar
}

console.log(result)
