  
var readlineSync = require('readline-sync');
var no = readlineSync.question("Please enter number : ");
if (no == 1){
    console.log("Ones place")
}else if (no == 10){
    console.log("Tens place")
}else if (no == 100){
    console.log("Hundred place")
}else if (no == 1000){
    console.log("Thousands place")
}