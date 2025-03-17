function summation1(n) {
    total = 0;
    for (i = 1; i <=n; i++){
        total += i;
    } return total;
}

n = 3000_000_000;
console.time()
summation1(n)
console.timeEnd()