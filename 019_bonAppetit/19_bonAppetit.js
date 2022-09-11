/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */



function bonAppetit(bill, k, b) {
    let totalBill = 0;
    let refund = 0;
    let bActual;

    for (let i = 0; i < bill.length; i++) {
        totalBill = totalBill + bill[i];
        bActual = (totalBill-bill[k])/2;
    }

    if (b == bActual) {
        console.log('Bon Appetit');
    } else {
        refund = b - bActual;
        console.log(refund);
    }
}

console.log(bonAppetit([3,10,2,9],1,12));