/*
 * Complete the getMoneySpent function below.
 */

budget = 10
keyboard = [1,3];
usdDrive = [8,2,5];

function getMoneySpent(keyboards, drives, b) {
    let cost = 0;
    let maxCost = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if ((keyboards[i] + drives[j]) <= b) {
                cost = keyboards[i] + drives[j];
                if (cost > maxCost) {
                    maxCost = cost;
                }
            } 
        }
    }
    return maxCost
}

console.log(getMoneySpent(keyboard,usdDrive,budget));