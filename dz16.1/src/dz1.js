const dz1 = () => {

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

const isSumEven = priceOfAllGoodsWithoutCoins % 2 === 0;
console.log(isSumEven ? `The price of all goods is even number? ${isSumEven}` : `The price of all goods is even number? ${isSumEven}`);

const magicNum = 500;
const restFrom500 = Number(magicNum - priceOfAllGoods).toFixed(2);
console.log(`The rest from 500 is ${restFrom500}`);

const fixedApplePrice = Number(applePrice.toFixed(2));
const fixedAvokadoPrice = Number(avokadoPrice.toFixed(2));
const fixedMangoPrice = Number(mangoPrice.toFixed(2));
const summOfFixedFruits = (fixedApplePrice + fixedAvokadoPrice + fixedMangoPrice);
const sumDivededto3 = summOfFixedFruits/3;
const sum = Number(sumDivededto3.toFixed(2));
console.log(`Average mean is" ${sum}`);

const discount = Math.random();
const fixedDiscount = Number(discount.toFixed(2));
const priceWithDiscount = Number((summOfFixedFruits - fixedDiscount).toFixed(2));
const nettoProfit = Number(((summOfFixedFruits/2) - fixedDiscount).toFixed(2));
console.log(`Price to pay is ${priceWithDiscount}`);
console.log(`Profit of netto is ${nettoProfit}`);

return '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW1--------`;
}

export default dz1;
