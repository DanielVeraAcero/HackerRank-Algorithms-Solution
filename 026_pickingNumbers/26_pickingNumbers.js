/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
const a = [1,1,1,1,1,1]
function pickingNumbers(a) {
    a.sort((a,b)=>a-b);
    let subArrays = [];    
    let cantItem = a.reduce((obj,item)=>{(!obj[item]) ? obj[item] = 1 : obj[item] += 1; return obj },{});
    let singleItems = Object.keys(cantItem);
    let valueSingleItems = Object.values(cantItem);
    let maxFreq = valueSingleItems.reduce((acc,item) => Math.max(acc,item));

    if (singleItems.length == 1) {
        let longSubArray = a.length;
        return longSubArray
    }
    
    for (let i = 1; i < singleItems.length; i++) {
        if (Math.abs(singleItems[i]-singleItems[i-1]) <= 1) {
            subArrays.push(a.filter(item => ((item == singleItems[i]) || (item == singleItems[i-1]))));
        }
    }

    let cantItemSubArray = subArrays.map(item => item.length);    
    let longSubArray = cantItemSubArray.reduce((acc,item) => Math.max(acc,item));
    if (maxFreq > longSubArray) {
        longSubArray = maxFreq;
    }
    return longSubArray
}

console.log(pickingNumbers(a));

