var readlineSync = require('readline-sync');
var currentDate = readlineSync.question("Enter your date: "); 
     
    var minDate = new Date('20/03/2020');
    var maxDate =  new Date('20/09/2021');

    if (currentDate > minDate && currentDate < maxDate ){
         console.log('true')
    }
    else{
        console.log('false')
    }