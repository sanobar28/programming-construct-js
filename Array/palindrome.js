var readlineSync = require('readline-sync');

var start = 10;
var end = 50;
var copyNum = 0;
var reverse = 0;
var flag = 0;

readlineSync.question("Palindrome numbers between "+start+" to "+end+":<br>");
for(start = start; start <= end; start++)
{
copyNum = start;
reverse = 0;
// reverse a number
while(copyNum != 0)
{
reverse = reverse * 10;
reverse = reverse + (copyNum % 10);
copyNum = Math.floor(copyNum / 10);
}
// result
if((start == reverse) && (start != 0))
{
flag = 1;
process.stdout.write(start +", ");
}
}

if(flag == 0)
readlineSync.question("There is no palindrome number between the given range");