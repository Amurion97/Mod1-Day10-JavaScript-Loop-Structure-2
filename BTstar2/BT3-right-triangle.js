let result = "";

document.addEventListener("click", function(event){
    let target = event.target;
    console.log(target);
    let height = parseInt(document.getElementById("height").value);
    switch(target.id){
        case "nw":
            printResult(drawNW(height));
            break;
        case "ne":
            printResult(drawNE(height));
            break;
        case "sw":
            printResult(drawSW(height));
            break;
        case "se":
            printResult(drawSE(height));
            break;
        //others?
    }
});
function drawNW(height) {
    result = "<p>The resulted triangle: </p>"
    for (let i = 1; i <= height; i++) {
        result += "<p class='no-margin font-monospace'>";
        for (let j = 1; j <= height; j++) {
            if (j <= i) {
                result += "*";
            } else {
                result += "&nbsp;";
            }
        }
        result += "</p>"
    }
    return result;
}
function drawNE(height){
    result = "<p>The resulted triangle: </p>"
    for (let i = 1; i <= height; i++){
        result += "<p class='no-margin font-monospace'>";
        for (let j = 1; j <= height; j ++){
            if (j <= height - i){
                result += "&nbsp;";
            } else {
                result += "*";
            }
        }
        result += "</p>"
    }
    return result;
}
function drawSW(height){
    result = "<p>The resulted triangle: </p>"
    for (let i = 1; i <= height; i++){
        result += "<p class='no-margin font-monospace'>";
        for (let j = 1; j <= height; j ++){
            if (j <= height - i + 1){
                result += "*";
            } else {
                result += "&nbsp;";
            }
        }
        result += "</p>"
    }
    return result;
}
function drawSE(height){
    result = "<p>The resulted triangle: </p>"
    for (let i = 1; i <= height; i++){
        result += "<p class='no-margin font-monospace'>";
        for (let j = 1; j <= height; j ++){
            if (j < i){
                result += "&nbsp;";
            } else {
                result += "*";
            }
        }
        result += "</p>"
    }
    return result;
}
function printResult(result) {
    document.getElementById("result").innerHTML = result;
    return 1;
}