// Complete the catAndMouse function below.

x = 1;
y = 3;
z = 2;

function catAndMouse(x, y, z) {
    let res;
    if (Math.abs(z-x) < Math.abs(z-y)) {
        res = 'Cat A';
    } else if (Math.abs(z-x) > Math.abs(z-y)) {
        res = 'Cat B';
    } else {
        res = 'Mouse C';
    }
    return res
}

console.log(catAndMouse(x,y,z));