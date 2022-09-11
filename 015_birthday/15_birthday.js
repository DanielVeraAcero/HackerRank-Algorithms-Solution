/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

s = [1,2,1,3,2,4,5,3,2,2];
d = 8;
m = 4;

function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        
        let sumLong = 0;
        for (let j = i; j < m+i; j++) {
            sumLong = sumLong + s[j]
            
            if (sumLong == d && j == m+i-1) {
                count = count + 1;
            }
        }
    }
    return count
}

console.log(birthday(s,d,m));