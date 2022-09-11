var result = a_very_big_sum([1,2,3,4,5])

function a_very_big_sum(long_integer_array) {
    let long_int = 0;
    for (i=0; i<long_integer_array.length ;i++) {
        long_int = long_int + long_integer_array[i];
    }
    return long_int
}

console.log(result)