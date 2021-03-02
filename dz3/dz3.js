const getMaxDigit = (number) => Math.max(...Array.from(String(number)).map(item => parseInt(item)))
document.writeln(`<div class="main"> <h2> FUNCTION 1. </h2> <h3> Max digit from 4572 is: </h3> <div class="call"> <h2> ${getMaxDigit(4572)} </h2> </div> </div>`);

function raiseToPower(number, power){
    if (power > 0){
        let sum = number;
        for(let i = 1; i < power; i++){
            sum = sum * number;
        }
        return sum;
    }else{
        return "OOPS!"  
    }
}
document.writeln(`<div class="main"> <h2> FUNCTION 2. </h2> <h3> Third power of 4 is: </h3> <div class="call"> <h2> ${raiseToPower(4, 3)} </h2> </div></div>`);

function formatName(name){
    String(name);
    return (name.slice(0, 1)).toUpperCase() + (name.slice(1)).toLowerCase();
}
document.writeln(`<div class="main"> <h2>FUNCTION 3.</h2> <h3> Formated name from "olha" is: </h3> <div class="call"> <h2> ${formatName("olha")} </h2> </div></div>`);

function getNettoSalary(salary){
    const taxes = 19.5;
    return (Number(salary)) - ((Number(salary)/100)*taxes);
}
document.writeln(`<div class="main"><h2>FUNCTION 4.</h2> <h3> Your salary before taxes was: 12500. Your salary after taxes is: </h3> <div class="call"> <h2> ${getNettoSalary(12500)}</h2> </div></div>`);

const getRandomNumber = (min, max) => Number(Math.random()*(max-min)+min).toFixed();
document.writeln(`<div class="main"><h2>FUNCTION 5.</h2> <h3> Random number from 1 to 100 is: </h3> <div class="call"> <h2> ${getRandomNumber(1, 100)} </h2> </div></div>`);

function countLetter(letter, word){
    const lowerCasedWord = word.toLowerCase();
    const lowerCasedLetter = letter.toLowerCase();
    let sumOfLetter = 0;
    for(let i = 0; i <= word.length; i++){
        if(lowerCasedWord[i] === lowerCasedLetter){
            sumOfLetter ++;
        }
    }
    return sumOfLetter;
}
document.writeln(`<div class="main"><h2>FUNCTION 6.</h2> <h3> Sum of letter "f" in word "difference" is: </h3> <div class="call"> <h2> ${countLetter("f", "difference")} </h2> </div></div>`);

function convertCurrency(str){
    const exchangeRate = 28;
    if(str.includes("$") || str.includes("uah")){
        if(str.includes("$")){
            const dolToHr = str.replace("$","");
            return (Number(dolToHr)*exchangeRate) + 'uah';
        }
        if(str.includes("uah")){
            const hrToDol = str.replace("uah","");
            return (Number(hrToDol)/exchangeRate) + '$';
        }
    }else{return "This currency aren't dollar or hryvnia"}
}
document.writeln(`<div class="main"><h2>FUNCTION 7.</h2> <h3> From 300uah we will have: </h3> <div class="call"> <h2> ${convertCurrency('350uah')} </h2> </div></div>`);

function getRandomPassword(length = 8){
    let password = "";
    const symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return password;
}
document.writeln(`<div class="main"><h2>FUNCTION 8.</h2> <h3> Random password, which has length 10 is: </h3> <div class="call"> <h2> ${getRandomPassword(10)} </h2> </div></div>`);

function deleteLettter(letter, string){
    const arraiys = string.split("");
    let filtered = arraiys.filter(function(value, index, arr){ 
        return value !== letter && value !== letter.toUpperCase();
    });
    return filtered.join("");
 }
document.writeln(`<div class="main"><h2>FUNCTION 9.</h2> <h3> String "baBa Katyaba" after deleting letter "b" is: </h3> <div class="call"> <h2> ${deleteLettter("b", "baBa Katyaba")} </h2> </div></div>`);

 function isPalindrom(str){
    const arraiys = (str.toLowerCase()).split("");
    const filteredArr = arraiys.filter(function(value, index, arr){ 
        return value !== " ";
    });
    const filteredStr = filteredArr.join("");
    return (filteredStr === filteredArr.reverse().join(""));
}
document.writeln(`<div class="main"><h2>FUNCTION 10.</h2> <h3> Is string "DafFad" the palindrom: </h3> <div class="call"> <h2> ${isPalindrom("DafFad")} </h2> </div></div>`);
