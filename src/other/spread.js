function reducer(totalValue, currentValue) {
  return totalValue + currentValue;
}

function totalPrice(zeiritsu, productsPrice) {
  return zeiritsu * Math.floor(productsPrice.reduce(reducer));
}
const productsPrice = [100, 200, 300, 500, 600];
const result = totalPrice(0.8, ...productsPrice);
console.log(result);
