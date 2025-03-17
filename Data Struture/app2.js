function summation2(n) {
    return (n* (n+1)) /2;
}

n = 3000_000_0000;
console.time()
summation2(n)
console.timeEnd()