/*
 * Complete the 'stringSimilarity' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function stringSimilarity(s) {

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        
        for (let j = 0; j < s.length-j; j++) {
            
            console.log(s[j] + ' ' + s[j]);
            // if (s[i] == s[j]) {
            //     count = count + 1
            // } else {
            //     break
            // }
        }
    }
    return count
}

console.log(stringSimilarity('ababaa'));