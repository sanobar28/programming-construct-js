var readlineSync = require('readline-sync');
const n = readlineSync.question("Enter a positive number: ");
let isPrime = true;

// check if number is equal to 1
if (n === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (n > 1) {

    // looping through 2 to number
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}