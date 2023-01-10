function primeCheck(number){
    if (number <= 1){
        return false;
    } else {
        for (let i = 2; i < number; i ++){
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let count = 0;
let i = 0;
const N = parseInt(prompt("So luong so nguyen to muon in ra: "));
// console.log(N);
while (count < N) {
    if (primeCheck(i)) {
        count ++;
        console.log("STT",count,":",i);
    }
    i ++;
}