let Fi = [1, 1];
console.log("The first 20 Fibonacci numbers are");
for (let i = 0; i < 20; i ++){
    if (!Fi[i]) {
        Fi.push(Fi[i - 1] + Fi[i - 2]);
    }
    console.log(i+1,":",Fi[i]);
}