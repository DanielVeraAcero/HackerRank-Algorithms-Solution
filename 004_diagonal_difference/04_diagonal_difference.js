let arr = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

function diagonalDifference(arr) {
    const res_diag_1 = diagonalDifference_int(arr)

    let brr = arr.reverse()
    const res_diag_2 = diagonalDifference_int(brr)

    console.log(arr,brr);

    function diagonalDifference_int(arr) {
    let diag_1 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                diag_1 = diag_1 + arr[i][j]
            }
        }
    }
    return diag_1
    }

    let res;

    if (res_diag_2 >= res_diag_1) {
    res = res_diag_2 - res_diag_1 
    } else {
    res = res_diag_1 - res_diag_2
    }

    return res;
}
console.log(diagonalDifference(arr));
