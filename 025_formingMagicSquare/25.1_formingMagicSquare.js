/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

let sasdas = [
    [5,3,4],
    [1,5,8],
    [6,4,2]
]

function formingMagicSquare(s) {
    let sDatabase = [
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [8, 1, 6, 3, 5, 7, 4, 9, 2]
    ];
    
    let sArray = []
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            sArray.push(s[i][j])
        }
    }
    
    let minVar = 100;
    for (let i = 0; i < sDatabase.length; i++) {
        let distNum = 0;
        let distNumArray = 0;
        for (let j = 0; j < sDatabase[i].length; j++) {
            // console.log(sArray[j] + ' ' + sDatabase[i][j]);
            distNum = Math.abs(sArray[j] - sDatabase[i][j])
            distNumArray = distNumArray + distNum;
        }
        if (distNumArray < minVar) {
            minVar = distNumArray
        }
    }
    return minVar
}

console.log(formingMagicSquare(sasdas));








