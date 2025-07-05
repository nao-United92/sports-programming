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

function promiseFactory(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(count);
      count += 2;
      resolve(count);
    }, 1000);
  });
}

promiseFactory(0)
  .then((ms) => {
    console.error(`${ms}は偶数のため、成功とします。`);
  })
  .catch((ms) => {
    console.error(`${ms}は奇数のため、成功としないです。`);
  })
  .finally(() => {
    console.error('処理を終了します。');
  });

// promise status
let promResolve, promReject;

const prom = new Promise((resolve, reject) => {
  promResolve = resolve;
  promReject = reject;
});

console.log(prom);
promResolve('引数');

console.log(prom);

// promise all
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('処理が完了しました。');
      resolve(ms);
    }, ms);
  });
}

const wait500 = wait(500);
const wait600 = wait(600);

Promise.all([wait500, wait600]).then(([resolve500, resolve600]) => {
  console.log('すべてのPromiseが完了しました。');
  console.log(resolve500, resolve600);
});

// promise.resolve
let val = 0;

Promise.resolve().then(() => {
  console.log(val);
});

val = 1;

console.log('グローバルコンテキスト終了');

// promise.reject
Promise.reject().catch((error) => {
  console.log(error);
});

console.log('グローバルコンテキスト終了');

// job queue and task queue
setTimeout(function task() {
  console.log('Taskの実行');
});

Promise.resolve().then(function job1() {
  console.log('Job1の実行');
});

Promise.resolve().then(function job2() {
  console.log('Job2の実行');
});

console.log('グローバルコンテキスト終了');
