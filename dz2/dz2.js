//1. Отримайте у користувача число(N) від якого ми будемо складати. 
//Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
//2.Перевірте, чи є передане значення N ЦІЛИМ числом. 
//(Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)
let userNNumber;
do {
    userNNumber = parseInt(prompt('Put down first(smaller than second) N-number'));
} while(Number.isNaN(userNNumber));
console.log(`You wrote down the N-number ${userNNumber}`);

//3.Отримайте у користувача число(M) до якого ми будемо складати (включно).
//4.Перевірте, чи є передане значення M ЦІЛИМ числом. 
let userMNumber;
do {
    userMNumber = parseInt(prompt('Put down second(bigger than first) M-number'));
} while(Number.isNaN(userMNumber));
console.log(`You wrote down the M-number. It is ${userMNumber}`);

//5.Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно 
//пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm.
function missEvenNumber() {
    if(confirm("Do you want to miss all even numbers? Are you sure?")){
        return true;
    }else{
        return false;
    }
}
const trueOrFalse = missEvenNumber();

//6.Напишіть цикл, який буде складати числа від раніше отриманих N и M
//7.В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. 
//9.Виведіть результат
let factorialFromNToM = 0;
for(let count = userNNumber; count <= userMNumber; count++){
    if(trueOrFalse === true){
        if(count % 2 === 0){
            continue;
        }
        factorialFromNToM += count;
    }else{
        factorialFromNToM += count;
    }
}
console.log(`Summ of all number from ${userNNumber} to ${userMNumber} is -  ${factorialFromNToM}`)