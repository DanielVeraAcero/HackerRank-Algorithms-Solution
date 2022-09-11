arr = [1,1,0,-1,-1];

let pos = arr.filter(item => item > 0);
let neg = arr.filter(item => item < 0);
let zer = arr.filter(item => item == 0);

console.log((pos.length/arr.length).toFixed(6));
console.log((neg.length/arr.length).toFixed(6));
console.log((zer.length/arr.length).toFixed(6));