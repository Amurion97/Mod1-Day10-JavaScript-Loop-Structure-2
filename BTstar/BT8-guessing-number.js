document.getElementById("start").addEventListener("click", function () {
    let range = parseInt(prompt("Range? (including 0)"));
    let x = Math.floor(Math.random() * range);
    let guess;
    for (let i = 0; i < 3; i++) {
        guess = parseInt(prompt("Your " + (i + 1) + " guess is?"));
        if (guess === x){
            alert("Correct, the random number is " + x);
            break;
        } else if (i === 2){
            alert("Run out of times")
        } else if (guess > x) {
            alert("That's bigger, try again");
        } else {
            alert("That's smaller, try again");
        }
    }
});
