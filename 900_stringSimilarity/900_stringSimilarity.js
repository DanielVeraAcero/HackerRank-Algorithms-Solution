/*
 * Complete the 'stringSimilarity' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function stringSimilarity(s) {
    let sSufix = [];

    for (let i = 0; i < s.length; i++) {
        let sufix = [];
        for (let j = i; j < s.length; j++) {
            sufix.push(s[j])
        }
        sSufix.push(sufix)
    }
    // console.log(sSufix);

    let count = 0;
    for (let i = 0; i < sSufix.length; i++) {
        
        for (let j = 0; j < sSufix[i].length; j++) {
            
            // console.log(s[j] + ' ' + sSufix[i][j]);
            if (s[j] === sSufix[i][j]) {
                count = count + 1
            } else {
                break
            }
        }
    }
    return count
}

console.log(stringSimilarity('parangaricutirimicuaroputodemierdaexcercise    123333312'));


zz = "\\"

console.log(zz.length);