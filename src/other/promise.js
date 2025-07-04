let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.floor(Math.random() * 11);

    if (rand < 5) {
      reject(rand);
    } else {
      resolve(rand);
    }
  }, 1000);
});

instance = instance.then((value) => {
  console.log(`5以上の値[${value}]が増えてきました。`);
});

instance = instance.catch((errorValue) => {
  console.error(`5未満の値[${errorValue}]が渡ってきたため表示。`);
});

instance = instance.finally(() => {
  console.error('処理を終了します。');
});
