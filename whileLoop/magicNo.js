let minNumber=1
let maxNumber=100
var readlineSync = require('readline-sync');
let midNumber=0
    while ( minNumber <= maxNumber ){
        midNumber=parseInt( (minNumber+maxNumber)/2 );
        console.log("Your number is lesser(l)/greater(g)/equals(e) : "+midNumber);
        input= readlineSync.question("Enter your option :");
        if(input === 'l')
            maxNumber=midNumber;
        else if (input === 'g')
            minNumber=midNumber;
        else if (input === 'e'){
            console.log("Your magic number is :"+midNumber);
            break;
        }
        else
            console.log("Wrong input")
    }