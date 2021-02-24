//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
//Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit(number){
    const numToSeparate = number;
    const arrayOfDigits = Array.from(String(numToSeparate), Number);
    return Math.max.apply(Math, arrayOfDigits);
}

console.log(`FUNKTION 1. Max digit is ${getMaxDigit(855)}`);

//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function raiseToPower(number, power){
    let sum = number;
    for(let i = 1; i < power; i++){
        sum = sum * number;
    }
    return sum;
}
console.log(`FUNKTION 2. Third power of 4 is ${raiseToPower(4, 3)}`);

//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function formatName(name){
    String(name);
    let nameAfterFormatting = (name.slice(0, 1)).toUpperCase() + (name.slice(1)).toLowerCase();
    return nameAfterFormatting;
}
console.log(`FUNKTION 3. Formated name is ${formatName("olha")}`);

//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарoбітньої плати. 
//(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function getNettoSalary(salary){
    const taxes = 18 + 1.5;
    let salaryAfterTaxes = (Number(salary)) - ((Number(salary)/100)*taxes);
    return salaryAfterTaxes;
}
console.log(`FUNKTION 4. Your salary after taxes is ${getNettoSalary(12500)}.`)

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(min, max){
    return Number(Math.random()*(max-min)+min).toFixed(1);
}
console.log(`FUNKTION 5. Random number is ${getRandomNumber(1, 100)}.`);

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, word){
    let sumOfLetter = 0;
    for(let i = 0; i <= word.length; i++){
        if(word[i] === letter){
            sumOfLetter ++;
        }
    }
    return sumOfLetter;
}
console.log(`FUNKTION 6. Sum of letter "f" in word "difference" is ${countLetter("f", "difference")}`);

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
//Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
//Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

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
console.log(`FUNKTION 7. From 300$ we will have ${convertCurrency('350uah')}`);