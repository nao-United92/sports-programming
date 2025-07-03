function reducer(totalValue, currentValue) {
  return totalValue + currentValue;
}

function totalPrice(zeiritsu, ...productsPrice) {
  return Math.floor(((1 * zeiritsu) / 100) * productsPrice.reduce(reducer));
}
const result = totalPrice(8, 100, 200, 300, 500, 600);
console.log(result);

const chuka = ['a', 'b', 'c'];
const desert = ['1', '2', '3'];
console.log([...chuka]);
console.log([...chuka, ...desert]);
console.log([...chuka, 'Yeah', ...desert]);
