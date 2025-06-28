let counter = 0;
const intervalID = setInterval(() => {
  counter++;
  console.log(`Counter: ${counter}`);

  if (counter === 3) {
    clearInterval(intervalID);
    console.log('インターバル終了');
  }
}, 1000);
