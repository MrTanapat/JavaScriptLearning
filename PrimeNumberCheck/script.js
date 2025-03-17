function ePrime() {
    const n = parseInt(document.getElementById('inputNumber').value);
    const res = document.getElementById('result');

    if (isNaN(n) || n <= 1) {
        res.textContent = "Please input a number";
        res.style.color = "red";
        return;
    }
    let isPrime = true;
    for (let i = 2;i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        res.textContent = `${n} is a Prime Number.`;
        res.style.color = "#99BC85";
    } else {
        res.textContent = `${n} is a Non-Prime Number.`;
        res.style.color = "#143D60";
    }
}