//functions break our code up into small schunks
//Examples

// let coffeeIsGrinding = true ;
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log ("Stopping the grind");
//         coffeeIsGrinding = false ;
//     } else{
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }   
// }
// pressGrindBeans();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
//    }
   
//    cashWithdrawal(300, 50449921);
//    cashWithdrawal(30, 50449921);
//    cashWithdrawal(200, 50447921);

//Arrow function.
//using functions to complete the coffee order:
//The => declares a function:

// const coffeeOrder = (size, typeofdrink) => {
//    console.log(`Here is your ${size} ${typeofdrink}`)
// }
// coffeeOrder("large","Latte");

//Return will simply return the result into the log;

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

//Declaration function
//Function is linked to a an identifier that calls factorial to get it to do something;

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//    }
//    console.log(factorial(33));

//Expression declaration function-
// const square = function(number) {
//     return number * number;
//    };
//    square(5); 

//Functions are written to perform a task
//Functions will take data, perform a set of tasks on the data and then return the result
//We can define parameters to be used when calling the function

//Activity 1

// let orderCount = 1;
// const takeOrder = (topping1,topping2,topping3) => {
//  console.log(`Pizza with ${topping1},${topping2},${topping3}: Order count ${orderCount}`);
//     return (orderCount++)
// }
// takeOrder("pepperoni","onion","bacon");
// takeOrder("Pineapple", "Sausage","Sweetcorn");
// takeOrder("pepperoni","onion","bacon");


//Activity 2- except I used if/elses
var pin = (9867);
var avBal = (40);
var withD =(50);
var access = (false);
let pinT = (5467);


if (pinT === pin ){
   access === (true)
    console.log (`Your available Balance is £${avBal}`);
}   else  { 
        access ===(false);   
            console.log (`The pin you entered is incorrect`);
                return;
}  
if (withD > avBal){
        console.log(`You can not withdrawl the amount chosen`)
            } else if (withD <= avBal)
                {
                    console.log(`Take your card and the money will follow shortly`)   
                             }  



    