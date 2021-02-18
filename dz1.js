const applePrice = 15.678;
const avokadoPrice = 123.965;
const mangoPrice = 90.2345;

const maxPrice = Math.max(applePrice, avokadoPrice, mangoPrice);
const minPrice = Math.min(applePrice, avokadoPrice, mangoPrice);
const priceOfAllGoods = mangoPrice + avokadoPrice + applePrice;

console.log(`Max price is ${maxPrice}`);
console.log(`Min price is  ${minPrice}`);
console.log(`Price of all goods is  ${priceOfAllGoods}`);


const roundedApplePrice = parseInt(applePrice);
const roundedAvokadoPrice = parseInt(avokadoPrice);
const roundedMangoPrice = parseInt(mangoPrice);

const priceOfAllGoodsWithoutCoins = roundedMangoPrice + roundedAvokadoPrice + roundedApplePrice;
console.log(`Price of all goods without coins is  ${priceOfAllGoodsWithoutCoins}`);
 

function ceilTo100(num){
    return Math.round(num/100)*100
}
console.log("Sum rounded to 100 -", (ceilTo100(priceOfAllGoodsWithoutCoins)));

let isSumEven = true;
if (priceOfAllGoodsWithoutCoins % 2 !== 0){
    isSumEven = false;
}
console.log(`Is the sum of all goods an even number? ${isSumEven} `);


console.log(`The rest from 500 is`, (500 - priceOfAllGoods).toFixed(2));

const fixedApplePrice = Number(applePrice.toFixed(2));
const fixedAvokadoPrice = Number(avokadoPrice.toFixed(2));
const fixedMangoPrice = Number(mangoPrice.toFixed(2));
const summOfFixedFruits = (fixedApplePrice + fixedAvokadoPrice + fixedMangoPrice);
const sumDivededto3 = summOfFixedFruits/3;
const sum = Number(sumDivededto3.toFixed(2));
console.log(`Average mean is" ${sum}`);

const discount = Math.random();
console.log(`Your discount is ` + (discount.toFixed(2)));
const priceWithDiscount = summOfFixedFruits - discount;
console.log(`Price to pay is ` + (priceWithDiscount.toFixed(2)));
nettoProfit = (summOfFixedFruits/2) - discount;
console.log(`Profit of netto is ` + (nettoProfit.toFixed(2)));


