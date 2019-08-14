//Checks if the type and value are equal
// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //Checks if the type are not equal in which they are
// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

//The two lower codes check whether or not the age is higher or lower than the variable age.

// varAge = ("17");
// let age = ("16");
// if (age > varAge) {
//     console.log("Yes I can serve you")
// }
//     else {
//         console.log("You aren't old enough")
//     }

// varAge = ("17");
// let age = ("19");
// if (age > varAge) {
//     console.log("Yes I can serve you")
// }
//     else {
//         console.log("You aren't old enough")
//     }

//Using && to seperate to options
// varCountry = ("UK");
// varAge = ("17");
// let Age = ("18");
// let Country = ("USA");
// if (Country == varCountry && Age > varAge){
//     console.log ("Yes I can serve you and you are in the right country")
// }   
//     else {
//         console.log("You aren't old enough or in the wrong country")
//     };

// || These symbols are used to represent OR which looks to check if one value is true or not. 

//Challenge 1- Password log

// varPassword = ("8")
// let Password = ("T00my_Wis0")
// var str = (Password)
// var n = str.length;

// if ( n < varPassword){
//     console.log ("Your password is too short")
// } 
//     else{
//         console.log(Password)
//     }

//Challenge two- making variables divisible by 3 or 5

// varNum = ("15")
// if (varNum % 3 === 0 ){
//        console.log("This number is divisible by 3")  
// }
//     else {
//         console.log("This number isn't divisible by 3")
//     };
// if (varNum % 5=== 0 ){
//         console.log("This number is divisible by 5")  
//  }
//      else {
//          console.log("This number isn't divisible by 5")
//      };


varNum = ("12");

if (varNum % 3 === 0 && varNum % 5 === 0 )
{
       console.log("Fizz Buzz")
    }
       else if (varNum % 5 === 0)
       {
                console.log("Buzz")
            }
                else if (varNum % 3 === 0)
                {
                         console.log("Fizz")   
                   }
                         else console.log("Cannot be divided by 3 or 5");
                         


// Palindrome
// let num = 1001;
// numStr = num.toString();
// numStr1 = numStr.split('').reverse().join('');
// if (numStr == numStr1){
//     console.log ("the number is a palindrome")
// }
//     else {
//         console.log("the number is not a palindrome")
//     }

    
//
varspace1 = ("O");
varspace2 = ("X")
varspace3 = ("O")
varspace4 = ("X")
varspace5 = ("O")
varspace6 = ("X")
varspace7 = ("O")
varspace8 = ("X")
varspace9 = ("O")

console.log (` 
${varspace1}  | ${varspace2} | ${varspace3}
---|---|---  
${varspace4}  | ${varspace5} | ${varspace6}
---|---|--- 
${varspace7}  | ${varspace8} | ${varspace9}`)

if ( varspace1 == varspace2 && varspace1 == varspace3){
        console.log("You win")
    }
        else {
            console.log("you lose")
        }

    
     
 
     
 