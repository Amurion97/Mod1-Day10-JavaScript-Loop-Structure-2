let result = '<table>';
for (let i = 1; i <= 9; i++){
    result += '<tr>';
    for (let j = 2; j <= 9; j++){
        result += '<td>'+ j + 'x' + i + '=' + i * j + '</td>';
    }
    result += '</tr>';
}
result += '</table>';
document.getElementById("result").innerHTML = result;