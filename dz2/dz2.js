let firstInputedNumber;
do {
    firstInputedNumber = parseInt(prompt('Put down first number'));
} while(Number.isNaN(firstInputedNumber));
console.log('%c%s', 'font: 1.4em/1 Arial;' ,`You wrote down number ${firstInputedNumber}`);

let secondInputedNumber;
do {
    secondInputedNumber = parseInt(prompt('Good job. Put down your second number'));
} while(Number.isNaN(secondInputedNumber));
console.log('%c%s', 'font: 1.4em/1 Arial;' ,`You wrote down second number. It is ${secondInputedNumber}`);

let missEvenNumbers;
confirm("Do you want to miss all even numbers? Are you sure?") ? missEvenNumbers = true : missEvenNumbers = false;

let smallerNumber;
let biggerNumber;

if (firstInputedNumber > secondInputedNumber) {
    smallerNumber = secondInputedNumber;
    biggerNumber = firstInputedNumber;
}else{
    smallerNumber = firstInputedNumber;
    biggerNumber = secondInputedNumber;
}

let factorialFromNToM = 0;
for(let count = smallerNumber; count <= biggerNumber; count++){
    if(missEvenNumbers){
        if(count % 2 === 0){
            continue;
        }   
    }
    factorialFromNToM += count;
}
console.log('%c%s', 'color: crimson; font: 1.6em/1 Arial;' , `Sum of all number from ${smallerNumber} to ${biggerNumber} is -  ${factorialFromNToM}`)
