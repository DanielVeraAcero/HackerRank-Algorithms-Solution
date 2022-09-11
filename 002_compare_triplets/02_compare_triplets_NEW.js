let alc = [5,6,7];
let bob = [3,6,10];

function compare_triplets(a,b) {
    let score = [0,0];
    a.forEach((item,i) => {
        if (item > b[i]) {
            score[0] +=1
        } else if (item < b[i]) {
            score[1] +=1
        }
    });
    return score
}

let result = compare_triplets(alc,bob)
console.log(result)

