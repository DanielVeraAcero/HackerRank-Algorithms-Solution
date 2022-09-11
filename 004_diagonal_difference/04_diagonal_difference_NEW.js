let ar = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
];


const matrix = ar;
const matrixRev = [...matrix];
matrixRev.reverse()
let sumDiag1 = 0;
let sumDiag2 = 0;

matrix.forEach((item,i) => {(item[i]) ? sumDiag1 += item[i] : sumDiag1 += 0 ; return sumDiag1});
console.log(sumDiag1);
matrixRev.forEach((item,i) => {(item[i])? sumDiag2 += item[i] : sumDiag2 += 0 ; return sumDiag2});
console.log(sumDiag2);

return Math.abs(sumDiag1-sumDiag2)


function diagonalDifference(arr) {
    
}

