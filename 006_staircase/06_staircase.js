/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
let n;

function staircase(n) {
    
    for (let i = 1; i < n+1; i++) {
        let staircase_fig= "";
        let space_sc = " ";
        let hashtag_sc = "#"; 
        hashtag_sc = hashtag_sc.repeat(i);
        space_sc = space_sc.repeat(n-i);
        staircase_fig = space_sc + hashtag_sc;
        console.log(staircase_fig);
    }
}

staircase(5)
