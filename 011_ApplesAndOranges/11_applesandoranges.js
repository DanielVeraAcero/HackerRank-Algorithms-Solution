/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2 ,2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let count_a = 0;
    for (let i = 0; i < apples.length; i++) {
        let dist_a = a + apples[i]
        if (dist_a >= s && dist_a <= t) {
            count_a = count_a + 1
        }
    }
    console.log(count_a);

    let count_o = 0;
    for (let i = 0; i < oranges.length; i++) {
        let dist_o = b + oranges[i]
        if (dist_o >= s && dist_o <= t) {
            count_o = count_o + 1
        }
    }
    console.log(count_o);
    return [count_a, count_o]
}

res = countApplesAndOranges(s, t, a, b, apples, oranges)
console.log(res);