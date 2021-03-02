const whoLiveInForest = ['wolf', 'fox', 'snake', 'bird'];

const Console = (whoLiveInForest) => {
    console.log(`I want to eat the ${whoLiveInForest}`)
}

const iteratorFunc = (tvari, callback) => {
    tvari.forEach((tvar) => {
        callback(tvar)
    })
}

iteratorFunc(whoLiveInForest, Console);

const userInput = prompt("Введіть 5 чисел через кому");

const strToArr = userInput.split(",");

const toNumbers = arr => arr.map(Number);

function powering(number){
    console.log(number)
    poweringNumber = Math.pow(number, 3)
    if(number % 2){
        console.log(poweringNumber, true)
    }else{console.log(poweringNumber, false)}
}

const iter = (nums, powering) => {
    nums.forEach((num) => {
        powering(num)
    })
}

iter(toNumbers(strToArr), powering);




