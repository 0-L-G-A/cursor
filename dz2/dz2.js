let userNNumber;
do {
    userNNumber = parseInt(prompt('Put down your number'));
} while(Number.isNaN(userNNumber));

console.log(`You wrote down the N-numer ${userNNumber}`);

let userMNumber;
do {
    userMNumber = parseInt(prompt('Put down your number'));
} while(Number.isNaN(userMNumber));

console.log(`You wrote down the M-numer ${userMNumber}`);

function missEvenNumber() {
    if(confirm("Do you want to miss all even numbers? Are you sure?")){
        return true;
    }else{
        return false;
    }
}
const trueOrFalse = missEvenNumber();

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