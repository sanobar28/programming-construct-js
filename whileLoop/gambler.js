let money=100;
const goal=200;
const bet_money=1;
let bets=0;
let wins=0;
    while(money === 0 || money < goal){
        bets++;
        if(Math.floor(Math.random()*10)%2 === 1){
            money += bet_money;
            wins++;
        }
        else
            money -= bet_money;
    }
    console.log("Out of "+bets+" gambler bets, number of gambler wins are :"+wins);