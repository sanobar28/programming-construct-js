var readlineSync = require('readline-sync');
//read inputs
var a = readlineSync.question("Please enter number : ", a);
var b = readlineSync.question("Please enter number : ", b);
var c = readlineSync.question("Please enter number : ", c);

let res1 = console.log(a + b * c)
let res2 = console.log(a % b + c)
let res3 = console.log(c + a / b)
let res4 = console.log(a * b + c)

//compare results to find max
if (res1 > res2 && res1 > res3 && res1 > res4) {
    console.log("max is : " + res1)
} else if (res2 > res1 && res2 > res3 && res2 > res4) {
    console.log("max is : " + res2)
} else if (res3 > res1 && res3 > res2 && res3 > res4) {
    console.log("max is : " + res3)
} else if (res4 > res1 && res4 > res2 && res4 > res3) {
    console.log("max is : " + res4)
}

//compare results to find min
if (res1 < res2 && res1 < res3 && res1 < res4) {
    console.log("min is : " + res1);
} else if (res2 < res1 && res2 < res3 && res2 < res4) {
    console.log("min is : " + res2)
} else if (res3 < res1 && res3 < res2 && res3 < res4) {
    console.log("min is : " + res3)
} else if (res4 < res1 && res4 < res2 && res4 < res3) {
    console.log("min is : " + res4)
}
