const getRandomArray = (length, min, max) => {return randomArray = Array.from(Array(length)).map(x=>Number(Math.random()*(max-min)+min).toFixed())}

const arrayForGetModa = getRandomArray(10, 1, 20);
//let arrayForGetModa = [1, 1, 2, 2.5, 2.2, 3, 4, 5, 6, 6, 7, 9, 10, 13, 16];
function getModa(arr) {
    let arrayOfObjects = []; 
    let modedArr = [];
    let uniqueArray = new Set(arr); 
    for (const i of uniqueArray) {  
      if (!Number.isInteger(Number(i))){continue}
      const filteredNum = arr.filter((num) => i === num); 
      arrayOfObjects.push({
        number: i,
        frequency: filteredNum.length
      });
    }
  
    arrayOfObjects.sort((a, b) => {
      return b.frequency - a.frequency;
    });
  
    arrayOfObjects.forEach(value => {
      if (value.frequency === arrayOfObjects[0].frequency) {
        modedArr.push(value.number);
      }
    });
  
    return modedArr;
  }

const arrayForGetAverage = [1, 2.5, 3, 4, 6, 6.7, 7, 9];
function getAverage(arr){
  let filteredArray = [];
  arr.forEach((item)=>{if(Number.isInteger(item)){filteredArray.push(item)}});
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (filteredArray.reduce(reducer))/filteredArray.length;
}
 
const arrayForMedian = [12, 7, 2, 8, 10, 4, 6, 3, 5.5, 6.4];
function getMedian(arr){
  let filteredArray = [];
  let median = [];
  arr.forEach((item)=>{if(Number.isInteger(item)){filteredArray.push(item)}});
  const sortedArray = filteredArray.sort((a, b) => a - b);
  const halfLengthOfSortedArray = Math.floor(sortedArray.length/2);
  if(sortedArray.length % 2 === 0){
    median = (sortedArray[halfLengthOfSortedArray - 1] + sortedArray[halfLengthOfSortedArray])/2;
  }else{
    median = sortedArray[halfLengthOfSortedArray];
  }
return median;
}

const arrayForFilterEvenNumbers = [1, 2, 5, 6, 8, 9, 13, 15, 20];
function filterEvenNumbers(arr){
  const filteredArray = arr.filter((element) => !(element % 2 === 0));
  return filteredArray;
}

const arrayOfDifferentNumbers = [-5, -4, -1, 0, 2, 5, 7];
function countPositiveNumbers(arr){
  const filteredArray = arr.filter((element) => element > 0);
  return filteredArray.length;
}

//Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
const arrayForDividing = [5, 8, 20, 6, 44, 50, 35, 88];
function getDividedByFive(arr){
  const filteredArray = arr.filter((element) => (element % 5 === 0));
  return filteredArray;
}

//1
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 1--------`);
console.log(`Random array from 1 to 10. It has 4 elements: ${getRandomArray(4, 1, 10)}`);
//2
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 2--------`);
console.log(`I created array from 1 to 20. It has 10 elements:`);
console.log(arrayForGetModa);
console.log(`Moda of my array: ${getModa(arrayForGetModa)}`);
//3
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 3--------`);
console.log(`Array for getAwerage function: `);
console.log(arrayForGetAverage);
console.log(`Average number of array:`);
console.log(getAverage(arrayForGetAverage));
//4
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 4--------`);
console.log(`Array for getMedian function:`);
console.log(arrayForMedian);
console.log(`Median of array:`);
console.log(getMedian(arrayForMedian));
//5
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 5--------`);
console.log(`Array for filterEvenNumbers function:`);
console.log(arrayForFilterEvenNumbers);
console.log(`Filtered array with only odd numbers:`);
console.log(filterEvenNumbers(arrayForFilterEvenNumbers));
//6
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 6--------`);
console.log(`Array for countPositiveNumbers function:`);
console.log(arrayOfDifferentNumbers);
console.log(`Filtered array with only positive numbers:`);
console.log(countPositiveNumbers(arrayOfDifferentNumbers));
//7
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 7--------`);
console.log(`Array for dividing by 5 function:`);
console.log(arrayForDividing);
console.log(`Filtered array with numbers, which we can divide by 5:`);
console.log(getDividedByFive(arrayForDividing));