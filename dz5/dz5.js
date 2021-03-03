
//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
//max – максимальне значення цілого числа. 
//Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandomArray = (length, min, max) => {return randomArray = Array.from(Array(length)).map(x=>Number(Math.random()*(max-min)+min).toFixed())}
console.log(getRandomArray(4, 1, 10));

//Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(arrayForGetModa) {
    let modecount = [];
    let valueArr = [];
    let dataSet = new Set(arrayForGetModa);
    for (const iterator of dataSet) {
      const filteredNum = arrayForGetModa.filter((num) => iterator === num);
      modecount.push({
        mode: iterator,
        count: filteredNum.length
      });
    }
  
    modecount.sort((a, b) => {
      return b.count - a.count;
    });
  
    modecount.forEach(value => {
      if (value.count === modecount[0].count) {
        valueArr.push(value.mode);
      }
    });
  
    return valueArr;
  }

  let arrayForGetModa = getRandomArray(10, 1, 20);
  console.log(arrayForGetModa);
  console.log(getModa(arrayForGetModa));