function getMaxDigit(number){
    const numToSeparate = number;
    const arrayOfDigits = Array.from(String(numToSeparate), Number);
    return Math.max.apply(Math, arrayOfDigits);
}
document.writeln(`<div class="main"> <h2> FUNCTION 1. </h2> <h3> Max digit from 4572 is: </h3> <div class="call"> <h2> ${getMaxDigit(4572)} </h2> </div> </div>`);

function raiseToPower(number, power){
    let sum = number;
    for(let i = 1; i < power; i++){
        sum = sum * number;
    }
    return sum;
}
document.writeln(`<div class="main"> <h2> FUNCTION 2. </h2> <h3> Third power of 4 is: </h3> <div class="call"> <h2> ${raiseToPower(4, 3)} </h2> </div></div>`);

function formatName(name){
    String(name);
    let nameAfterFormatting = (name.slice(0, 1)).toUpperCase() + (name.slice(1)).toLowerCase();
    return nameAfterFormatting;
}
document.writeln(`<div class="main"> <h2>FUNCTION 3.</h2> <h3> Formated name from "olha" is: </h3> <div class="call"> <h2> ${formatName("olha")} </h2> </div></div>`);

function getNettoSalary(salary){
    const taxes = 18 + 1.5;
    let salaryAfterTaxes = (Number(salary)) - ((Number(salary)/100)*taxes);
    return salaryAfterTaxes;
}
document.writeln(`<div class="main"><h2>FUNCTION 4.</h2> <h3> Your salary after taxes was: 12500. Your salary after taxes is: </h3> <div class="call"> <h2> ${getNettoSalary(12500)}</h2> </div></div>`);

function getRandomNumber(min, max){
    return Number(Math.random()*(max-min)+min).toFixed();
}
document.writeln(`<div class="main"><h2>FUNCTION 5.</h2> <h3> Random number from 1 to 100 is: </h3> <div class="call"> <h2> ${getRandomNumber(1, 100)} </h2> </div></div>`);

function countLetter(letter, word){
    let sumOfLetter = 0;
    for(let i = 0; i <= word.length; i++){
        if(word[i] === letter){
            sumOfLetter ++;
        }
    }
    return sumOfLetter;
}
document.writeln(`<div class="main"><h2>FUNCTION 6.</h2> <h3> Sum of letter "f" in word "difference" is: </h3> <div class="call"> <h2> ${countLetter("f", "difference")} </h2> </div></div>`);

function convertCurrency(str){
    if(str.includes("$") || str.includes("uah")){
        if(str.includes("$")){
            let dolToHr = str.replace("$","");
            return (Number(dolToHr)*28) + 'uah';
        }
        if(str.includes("uah")){
            let hrToDol = str.replace("uah","");
            return (Number(hrToDol)/28) + '$';
        }
    }else{return "This currency aren't dollar or hryvnia"}
}
document.writeln(`<div class="main"><h2>FUNCTION 7.</h2> <h3> From 300$ we will have: </h3> <div class="call"> <h2> ${convertCurrency('350uah')} </h2> </div></div>`);

function getRandomPassword(len = '8'){
    let password = "";
    let symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return password;
}
document.writeln(`<div class="main"><h2>FUNCTION 8.</h2> <h3> Random password, which has length 10 is: </h3> <div class="call"> <h2> ${getRandomPassword(10)} </h2> </div></div>`);
