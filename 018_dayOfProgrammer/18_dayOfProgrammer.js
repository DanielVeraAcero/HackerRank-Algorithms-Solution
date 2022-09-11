/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

y = 1918;

function dayOfProgrammer(year) {
    if (year <= 1917) {
        if (year%4 == 0) {
            printDay = `12.09.${year}`;        
        } else {
            printDay = `13.09.${year}`;
        }
        
    } else if (year >= 1919) {
        if (year%400 == 0 || (year%4 == 0 && year%100 !==0)) {
            printDay = `12.09.${year}`;
        } else {
            printDay = `13.09.${year}`;
        }
        
    } else { 
        printDay = `26.09.${year}`;
    }
    return printDay
}

console.log(dayOfProgrammer(2017));