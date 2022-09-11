let alc = [22,22,22];
let bob = [32,32,32];

function compare_triplets(alc,bob) {
    let comp_tpl = [0,0];
    for (let i=0; i<3 ;i++) {
        if (alc[i] > bob[i]) {
            comp_tpl[0]++;
        } else if (bob[i] > alc[i]) {
            comp_tpl[1]++;
        } else {
            comp_tpl = comp_tpl;
        }
    }
    return comp_tpl
}

result = compare_triplets(alc,bob)
console.log(result)

