const getRandomArray = (length, min, max) => {return randomArray = Array.from(Array(length)).map(x=>Number(Math.random()*(max-min)+min).toFixed())}

const arrayForGetModa = [1, 1, 2, 2.5, 2.2, 3, 4, 5, 6, 6, 7, 9, 10, 13, 16];
function getModa(arr) {
    let arrayOfObjects = []; 
    let modedArr = [];
    let uniqueArray = new Set(arr); 
    for (const i of uniqueArray) {  
      if (!Number.isInteger(Number(i))){continue}
      const filteredNum = arr.filter((num) => i === num); 
      arrayOfObjects.push({ number: i, frequency: filteredNum.length });
    }
  
    arrayOfObjects.sort((a, b) => {return b.frequency - a.frequency});
  
    arrayOfObjects.forEach(value => {
      if (value.frequency === arrayOfObjects[0].frequency) {
        modedArr.push(value.number);
      }
    });
    return modedArr;
  }

const arrayForGetAverage = [1, 2.5, 3, 4, 6, 6.7, 7, 9];
function getAverage(arr){
  const filteredArray = arr.filter((element) => Number.isInteger(element));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (filteredArray.reduce(reducer))/filteredArray.length;
  }
 
const arrayForMedian = [12, 7, 2, 8, 10, 4, 6, 3, 5.5, 6.4];
function getMedian(arr){
  let median = [];
  const filteredArray = arr.filter((element) => Number.isInteger(element));
  const sortedArray = filteredArray.sort((a, b) => a - b);
  const halfLengthOfSortedArray = Math.floor(sortedArray.length/2);
  sortedArray.length % 2 === 0 ? median = (sortedArray[halfLengthOfSortedArray - 1] + sortedArray[halfLengthOfSortedArray])/2 : median = sortedArray[halfLengthOfSortedArray];
  return median;
  }

const arrayForFilterEvenNumbers = [1, 2, 5, 6, 8, 9, 13, 15, 20];
const filterEvenNumbers = (arr) => {return arr.filter((element) => !(element % 2 === 0))};

const arrayOfDifferentNumbers = [-5, -4, -1, 0, 2, 5, 7];
const countPositiveNumbers = (arr) => {return arr.filter((element) => element > 0)};

const arrayForDividing = [5, 8, 20, 6, 44, 50, 35, 88];
const getDividedByFive = (arr) => {return arr.filter((element) => (element % 5 === 0))}

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
console.log(`Filtered array with only positive numbers has a length:`);
console.log(countPositiveNumbers(arrayOfDifferentNumbers));
//7
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 7--------`);
console.log(`Array for dividing by 5 function:`);
console.log(arrayForDividing);
console.log(`Filtered array with numbers, which we can divide by 5:`);
console.log(getDividedByFive(arrayForDividing));