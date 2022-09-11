/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let time = "12:01:00AM"

function timeConversion(s) {
    if (s.charAt(8) === "A") {
        if (s.charAt(0) === "1" && s.charAt(1) === "2") {
            s = s.replace("12","00")
        }
    
    } else {
        if (s.charAt(0) + s.charAt(1) != "12") {
            let conv = Number(s.charAt(0) + s.charAt(1));
            conv = conv + 12;
            let new_conv = String(conv);
            s = s.replace(s.charAt(0) + s.charAt(1),new_conv)
        }
    }
    let a = s.slice(0,8)
    return a
}

let result = timeConversion(time)
console.log(result);

