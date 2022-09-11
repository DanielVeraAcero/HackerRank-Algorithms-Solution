/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// let steps = 8; 
// let path = "DDUUUUDD";

function countingValleys(steps, path) {
    let levelSea = 0;
    let levelSeaIndicator = [];
    let valley = 0;


    for (let i = 0; i < steps; i++) {
        if (path[i] == "U") {
            levelSea = levelSea + 1;
            levelSeaIndicator.push(levelSea)
        } else {
            levelSea = levelSea - 1;
            levelSeaIndicator.push(levelSea)
        }
    }
    console.log(levelSeaIndicator);

    for (let m = 0; m < levelSeaIndicator.length; m++) {
        if (levelSeaIndicator[m] == 0 && levelSeaIndicator[m-1] < 0) {
            valley = valley + 1;
        }
    }
    return valley
}

console.log(countingValleys(12,"DDUUDDUDUUUD"));