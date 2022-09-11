/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */
let x1 = 0
let v1 = 2
let x2 = 5
let v2 = 3


function kangaroo(x1, v1, x2, v2) {
    let same = "NO";
    let t = 0;
    
    while (t <= 10000)  {
        t = t + 1;
        x1 = x1 + v1
        x2 = x2 + v2
        if (x1 == x2) {
            same = "YES";
        }
    }        


    return same
}
res = kangaroo (0,3,4,2)  
console.log(res);  