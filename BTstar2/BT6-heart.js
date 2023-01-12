let width = 0;
document.getElementById("ok").addEventListener("click", drawHeart);
document.getElementById("width").addEventListener("change", drawHeart);
function drawHeart() {
    width = document.getElementById("width").value;
    let result = "";
    result += "<p>The heart: </p>"
    result += drawUpper(width) + drawLower(width);
    printResult(result);
}
let blankSpace = "&#160;"
let filler = "x";
//upper part
function drawUpper(width){
    let draw = "";
    let upper = [];
    let smallWidth = Math.round(width/2);
    console.log(smallWidth);
    let blank = 0;
    while (smallWidth-blank*2 > 1) {
        let row = "";
        if (width%2 === 1){
            if (blank === 0){
                row = filler.repeat(smallWidth*2-1);
            }else{
                row = blankSpace.repeat(blank) + filler.repeat(smallWidth-blank*2) + blankSpace.repeat(blank*2-1)+ filler.repeat(smallWidth-blank*2) + blankSpace.repeat(blank);
            }
        }else{
            row = blankSpace.repeat(blank) + filler.repeat(smallWidth-blank*2) + blankSpace.repeat(blank);
            row = row.repeat(2);
        }
        row = "<p class='no-margin font-monospace'>" + row + "</p>";
        upper.push(row);
        console.log(upper);
        blank ++;
    }
    for (let i = upper.length -1; i >= 0; i--){
        draw += upper[i];
    }
    return draw;
}

// result += "<br>";
//lower part
function drawLower(width){
    let draw = "";
    let lower = [];
    let blank = 0;
    while (width-blank*2 > 0) {
        let row = blankSpace.repeat(blank) + filler.repeat(width-blank*2) + blankSpace.repeat(blank);
        row = "<p class='no-margin font-monospace'>" + row + "</p>";
        lower.push(row);
        console.log(lower);
        blank ++;
    }
    for (let i = 0; i < lower.length; i++) {
        draw += lower[i];
    }
    return draw;
}

function printResult(result) {
    document.getElementById("result").innerHTML = result;
    return 1;
}
