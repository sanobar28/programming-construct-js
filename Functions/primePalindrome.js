var readlineSync = require('readline-sync');
let num = readlineSync.question("Enter a number : ");
let num1 = readlineSync.question("Enter a number : ");

function checkPrime(num1) {
    var i, flag = true;
    for (i = 2; i <= (num1 - 1); i++)
    if (num1 % i == 0) {
        flag = false;
        break;
    }
    if (flag == true)
        console.log(num1 + " is prime");
    else
        console.log(num1 + " is not prime");
}

function palindrome(num) {
    let n = num;
    let reversed = 0;
    while (n !== 0) {
        let remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n = Math.floor(n / 10);
    }
    if (num == reversed)
        console.log(num + " is a palindrome number.");
    else
        console.log(num + " is not a palindrome number.");
}
palindrome(num);
checkPrime(num1);