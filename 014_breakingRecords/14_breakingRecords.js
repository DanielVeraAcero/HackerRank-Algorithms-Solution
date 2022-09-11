/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

// let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]



function breakingRecords(scores) {
    let limitMin = scores[0];
    let limitMax = scores[0];
    let countMin = 0;
    let countMax = 0;
    let res = [];

    for (let i = 0; i < scores.length; i++) { 
        
        if (scores[i] < limitMin) {

            limitMin = scores[i]
            countMin = countMin + 1
            
        } else if (scores[i] > limitMax) {

            limitMax = scores[i]
            countMax = countMax + 1
            
        } else {

        }
    }

    res.push(countMax)
    res.push(countMin)
    return res
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));