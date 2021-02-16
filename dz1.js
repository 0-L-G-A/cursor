const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;

const maxPrice = Math.max(price1, price2, price3);
console.log(`Max price is ${maxPrice}`);

const minPrice = Math.min(price1, price2, price3);
console.log(`Min price is  ${minPrice}`);

const priceOfAllGoods = price3 + price2 + price1;
console.log(`Price of all goods is  ${priceOfAllGoods}`);


const price11 = parseInt(price1);
const price22 = parseInt(price2);
const price33 = parseInt(price3);

const priceOfAllGoodsWithoutCoins = price33 + price22 + price11;
console.log(`Price of all goods without coins is  ${priceOfAllGoodsWithoutCoins}`);
 

function ceilTo100(num){
    return Math.ceil(num/100)*100
}
console.log("Sum rounded to 100 -", (ceilTo100(price1)));
console.log(`Sum rounded to 100 -`, (ceilTo100(price2)));
console.log(`Sum rounded to 100 -`, (ceilTo100(price3)));


const ostacha = priceOfAllGoodsWithoutCoins % 2;
console.log("Is the sum of all goods an even number? ");
ostacha === 0 ? console.log(true) : console.log(false);

console.log(`The rest from 500 is`, (500 - priceOfAllGoods));

const price111 = Number(price1.toFixed(2));
const price222 = Number(price2.toFixed(2));
const price333 = Number(price3.toFixed(2));
let summ = (price111 + price222 + price333);
let sum = summ/3;
sum = sum.toFixed(2);
console.log(`Average mean is" ${sum}`);

const discount = Math.random();
console.log(`Your discount is ` + (discount.toFixed(2)));
const priceWithDiscount = summ - discount;
console.log(`Price to pay is ` + (priceWithDiscount.toFixed(2)));
nettoProfit = (summ/2) - discount;
console.log(`Profit of netto is ` + (nettoProfit.toFixed(2)));


