// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
function printPrimesUpTo(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
const limit = 50;
printPrimesUpTo(limit);
