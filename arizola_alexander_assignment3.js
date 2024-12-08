function sumDigits(n) {
    let sumOfDigits = 0;
    while (n !== 0) {
        sumOfDigits += n % 10;
        n = Math.floor(n / 10);
    }

    // FINALLY RETURN SUM OF DIGITS
    return sumOfDigits;
}

console.log(sumDigits(234)); // (2 + 3 + 4)
console.log(sumDigits(222)); // (2 + 2 + 2)
console.log(sumDigits(1234)); // (1 + 2 + 3 + 4)
