const dz3 = () => {

const getMaxDigit = (number) => Math.max(...Array.from(String(number)).map(item => parseInt(item)))

console.log(`F1. Max digit from 4572 is: ${getMaxDigit(4572)}`);

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
console.log(`F2. Third power of 4 is: ${raiseToPower(4, 3)}`);

function formatName(name){
    String(name);
    return (name.slice(0, 1)).toUpperCase() + (name.slice(1)).toLowerCase();
}
console.log(`F3. Formated name from "olha" is: ${formatName("olha")} `);

function getNettoSalary(salary){
    const taxes = 19.5;
    return (Number(salary)) - ((Number(salary)/100)*taxes);
}
console.log(`F4. Your salary before taxes was: 12500. Your salary after taxes is: ${getNettoSalary(12500)}`);

const getRandomNumber = (min, max) => Number(Math.random()*(max-min)+min).toFixed();
console.log(`F5. Random number from 1 to 100 is: ${getRandomNumber(1, 100)}`);

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
console.log(`F6. Sum of letter "f" in word "difference" is: ${countLetter("f", "difference")}`);

return '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW3--------`;
}

export default dz3;