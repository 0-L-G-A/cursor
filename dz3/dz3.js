//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
//Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number){
    const numToSeparate = number;
    const arrayOfDigits = Array.from(String(numToSeparate), Number);
    return Math.max.apply(Math, arrayOfDigits);
}

console.log(`Max digit is ${getMaxDigit(855)}`);

//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл