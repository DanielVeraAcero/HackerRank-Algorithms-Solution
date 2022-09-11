/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// let min_value = Math.min.apply(null,a,b);

let a = [2,4];
let b = [16,32,96];

let count = 0;
let cond_1 = [];

let min_value_a = Math.min.apply(null,a)
let max_value_a = Math.max.apply(null,a)
let min_value_b = Math.min.apply(null,b)
let max_value_b = Math.max.apply(null,b)

for (let i = max_value_a; i <= min_value_b; i++) {
    let red_flag = false;
    for (let j = 0; j < a.length; j++) {
        if (i%a[j] != 0) {
            red_flag = true;
            break
        }
    }
    if (red_flag == false) {
        console.log(i);
    }
}



function getTotalX(a, b) {

}
