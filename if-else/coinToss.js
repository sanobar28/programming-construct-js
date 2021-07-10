var heads = 0;
var tails = 0;
function Click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        console.log("heads");
    }else{
        console.log("tails");
    }
};

Click();