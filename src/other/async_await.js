async function asyncFunction() {
  return 'hello';
}

asyncFunction().then((returnVal) => {
  console.log(returnVal);
});

const prom = new Promise((resolve) => {
  setTimeout(() => resolve('値を取り出します。'), 1000);
});

async function asyncFunction() {
  const value = await prom;
  console.log(value);
}

asyncFunction();
