/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [1,1,0,-1,-1];   

function plusMinus(arr) {
    let cont_pos = 0;
    let cont_neg = 0;
    let cont_zer = 0;
    let cont_tot = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==0) {
            cont_zer = cont_zer + 1
            cont_tot = cont_tot + 1
        } else if (arr[i] > 0) {
            cont_pos = cont_pos + 1
            cont_tot = cont_tot + 1
        }else {
            cont_neg = cont_neg + 1
            cont_tot = cont_tot + 1
        }
    }
    rat_zer = (cont_zer/cont_tot)
    rat_pos = (cont_pos/cont_tot)
    rat_neg = (cont_neg/cont_tot)

    console.log(rat_pos.toFixed(6));
    console.log(rat_neg.toFixed(6));
    console.log(rat_zer.toFixed(6));

}

plusMinus(arr)