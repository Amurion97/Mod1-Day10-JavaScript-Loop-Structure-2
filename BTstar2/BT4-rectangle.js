function drawRectangle(length, width) {
    let result = "<p>The resulted rectangle: </p>"
    for (let i = 1; i <= width; i++) {
        result += "<p class='no-margin font-monospace'>";
        switch (i) {
            case 1:
            case width:
                for (let j = 1; j <= length; j ++){
                    result += "*";
                }
                break;
            default:
                result += "*";
                for (let j = 2; j < length; j++) {
                    result += "&nbsp;";
                }
                result += "*";
                break;
        }
        result += "</p>"
    }
    return result;
}
function printResult(result) {
    document.getElementById("result").innerHTML = result;
    return 1;
}
printResult(drawRectangle(parseInt(prompt("Chieu dai HCN")), parseInt(prompt("Chieu rong HCN"))));
