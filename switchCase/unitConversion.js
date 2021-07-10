var readlineSync = require('readline-sync');
let n = readlineSync.question('Enter a number: ');
let num = readlineSync.question('Enter a choice 1.feet 2.inches 3.meter: ');
const p = n / 12;
console.log(p)
const q = p * 12;
const r = p / 3;
const s = r * 3 ;
function displayconversion(num) {

    switch (num) {
        case 1:
            console.log("feet -"+p);
            break;
        case 2:
            console.log("inches - "+q);
            break;
        case 3:
            console.log("meter - "+r);
            break;
        case 4:
            console.log("feet - "+s);
            break;
        default :
            console.log("wrong choice");    
            break;
    }
}
displayconversion(parseInt(num));