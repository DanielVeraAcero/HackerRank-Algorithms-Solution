/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    
}

// let s = [
//     [2,9,4],
//     [7,5,3],
//     [5,1,8],
// ]

let s = [
    [5,3,4],
    [1,5,8],
    [6,4,2],
]

let sMagic = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

let magicSum = 15;

for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = 0; j < s[i].length; j++) {
        sum = sum   + s[i][j]
        if (sum == magicSum && j == (s[i].length-1)) {
            sMagic[i] = s[i]
        }
    }
}

for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = 0; j < s[i].length; j++) {
        sum = sum   + s[j][i]
        if (sum == magicSum && j == (s[i].length-1)) {
            for (let j = 0; j < s[i].length; j++) {
                sMagic[j][i] = s[j][i]
            }
        }
    }
}

let sumDiag1 = 0;
for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
        if (i == j) {
            sumDiag1 = sumDiag1 + s[i][j]
            if (sumDiag1 == magicSum && j == (s[i].length-1)) {
                for (let j = 0; j < s[i].length; j++) {
                    sMagic[j][j] = s[j][j]
                }
            }
        }
    }
}

let sInv = s.reverse()
let sMagicInv = sMagic.reverse()

let sumDiag2 = 0;
for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
        if (i == j) {
            sumDiag2 = sumDiag2 + s[i][j]
            if (sumDiag2 == magicSum && j == (s[i].length-1)) {
                for (let j = 0; j < s[i].length; j++) {
                    sMagicInv[j][j] = sInv[j][j]
                }
            }
        }
    }
}

s = sInv.reverse()
sMagic = sMagicInv.reverse()

console.table(sMagic)







