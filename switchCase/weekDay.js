var readlineSync = require('readline-sync');
  let num = readlineSync.question('Enter a number: ');
  
  function displayDays(num) {
      switch (num) {
          case 1:
              console.log("monday");
              break;
          case 2:
              console.log("Tuesday");
              break;
          case 3:
              console.log("Wednesday");
              break;
          case 4:
              console.log("thursday");
              break;
          case 5:
              console.log("Friday");
              break;
          case 6:
              console.log("Saturday");
              break;
          case 0:
              console.log("sunday");
              break;
      }
  }
  displayDays(parseInt(num));