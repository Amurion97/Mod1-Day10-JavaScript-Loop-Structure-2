let Fi = [1, 1];
console.log("The first Fibonacci numbers that is divisible by 5 are");
for (let i = 0; i < 20; i ++){
    if (!Fi[i]) {
        Fi.push(Fi[i - 1] + Fi[i - 2]);
    }
    if (Fi[i] % 5 === 0) {
        console.log("No",i+1,":",Fi[i]);
    }
}