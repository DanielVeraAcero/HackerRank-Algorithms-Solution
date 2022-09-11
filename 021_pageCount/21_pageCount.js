/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

// let n = 5;
// let p = 4;

function pageCount(n, p) {
    let book = [
        [0,1]
    ]
    
    sheet = Math.floor(n/2)
    
    if (n%2 == 0) {
        for (let i = 0; i < sheet; i++) {
            book.push([0,0])
        }
        for (let m = 1; m < book.length; m++) {
            book[m][0] = book[0][0] + (m*2);
        }
        for (let m = 1; m < book.length-1; m++) {
            book[m][1] = book[0][1] + (m*2);
        }
    } else {
        for (let i = 0; i < sheet; i++) {
            book.push([0,0])
        }
        for (let m = 1; m < book.length; m++) {
            book[m][0] = book[0][0] + (m*2);
            book[m][1] = book[0][1] + (m*2);
        }
    }
    
    let countFront = 0
    let distFront = 0
    
    for (let r = 0; r < book.length; r++) {
        for (let s = 0; s <= 1; s++) {
            if (book[r][s] == p) {
                distFront = countFront
            }
        }
        countFront = countFront + 1;
    }
    
    let countBack = 0
    let distBack = 0
    
    for (let u = book.length-1; u >= 0; u--) {
        for (let v = 1; v >= 0; v--) {
            if (book[u][v] == p) {
                distBack = countBack
            }
        }
        countBack = countBack + 1;
    }
    
    let distMin;
    
    if (distFront <= distBack) {
        distMin = distFront
    } else {
        distMin = distBack
    }
    return distMin    
}

console.log(pageCount(5,4));
