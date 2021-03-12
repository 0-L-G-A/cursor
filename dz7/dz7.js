const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
   return this.tax * salary;
}

console.log(getMyTaxes.call(ukraine, 200));

function getMiddleTaxes(){
    return Number((this.tax * this.middleSalary).toFixed(2));
}

console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes(){
    return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
}
console.log(getTotalTaxes.call(latvia));

//Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } 
//кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної 
//країни та значення salary. profit = salary - taxes;

function getMySalary(country) {
    setInterval(() => {
        const newObject = {};
        newObject.salary = Math.trunc(Math.random()*(2000-1500)+1500);
        newObject.taxes = +(newObject.salary * country.tax).toFixed();
        newObject.profit = +(newObject.salary - newObject.taxes).toFixed();
        console.log('After 10 seconds', newObject);
    }, 10000);
}
getMySalary(ukraine);