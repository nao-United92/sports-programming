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

console.log('\n--- Promise.any の例 ---');

function randomDelayPromise(value, ms, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        console.log(`Promise.any: ${value} が ${ms}ms で失敗`);
        reject(new Error(`Failed: ${value}`));
      } else {
        console.log(`Promise.any: ${value} が ${ms}ms で成功`);
        resolve(value);
      }
    }, ms);
  });
}

Promise.any([
  randomDelayPromise('A', 3000, true), // 3秒後に失敗
  randomDelayPromise('B', 1000),       // 1秒後に成功 (これが最初に解決される)
  randomDelayPromise('C', 2000, true)  // 2秒後に失敗
])
.then(result => {
  console.log('Promise.any 結果 (成功):', result); // B
})
.catch(error => {
  console.error('Promise.any 結果 (全て失敗):', error); // AggregateError
});

// 全て失敗するパターン
Promise.any([
  randomDelayPromise('X', 1000, true),
  randomDelayPromise('Y', 2000, true)
])
.then(result => {
  console.log('Promise.any 結果 (成功):', result);
})
.catch(error => {
  console.error('Promise.any 結果 (全て失敗):', error.errors.map(e => e.message)); // [ 'Failed: X', 'Failed: Y' ]
});


console.log('\n--- Promise.allSettled の例 ---');

Promise.allSettled([
  randomDelayPromise('P1', 1000),       // 1秒後に成功
  randomDelayPromise('P2', 500, true),  // 0.5秒後に失敗
  randomDelayPromise('P3', 1500)        // 1.5秒後に成功
])
.then(results => {
  console.log('Promise.allSettled 結果:');
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`  Promise ${index + 1} 成功:`, result.value);
    } else {
      console.error(`  Promise ${index + 1} 失敗:`, result.reason.message);
    }
  });
});


console.log('\n--- コールバックベースの関数をPromise化する (Promisify) の例 ---');

// 擬似的なコールバックベースの関数
function oldCallbackFunction(data, callback) {
  setTimeout(() => {
    if (data === 'error') {
      callback(new Error('コールバック関数でエラーが発生しました。'), null);
    } else {
      callback(null, `処理されたデータ: ${data}`);
    }
  }, 800);
}

// oldCallbackFunction を Promise 化する
function promisifiedFunction(data) {
  return new Promise((resolve, reject) => {
    oldCallbackFunction(data, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// Promise化した関数を利用
promisifiedFunction('成功データ')
  .then(result => {
    console.log('Promisified Function (成功):', result);
  })
  .catch(error => {
    console.error('Promisified Function (エラー):', error.message);
  });

promisifiedFunction('error')
  .then(result => {
    console.log('Promisified Function (成功):', result);
  })
.catch(error => {
    console.error('Promisified Function (エラー):', error.message);
  })

console.log('\n--- Promise.race のより詳細な例（拒否を含む）---');

function delayedPromise(value, ms, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        console.log(`Race: ${value} が ${ms}ms で失敗`);
        reject(new Error(`Race Failed: ${value}`));
      } else {
        console.log(`Race: ${value} が ${ms}ms で成功`);
        resolve(value);
      }
    }, ms);
  });
}

// 成功が先に解決するパターン
Promise.race([
  delayedPromise('Fast Success', 500),
  delayedPromise('Slow Success', 1000),
  delayedPromise('Fast Fail', 200, true) // これが一番速いが、失敗
])
.then(result => {
  console.log('Promise.race 結果 (成功):', result); // Fast Success
})
.catch(error => {
  console.error('Promise.race 結果 (失敗):', error.message); // Fast Fail
});

// 失敗が先に解決するパターン
Promise.race([
  delayedPromise('Slow Success', 1000),
  delayedPromise('Fast Fail', 200, true) // これが一番速く、失敗
])
.then(result => {
  console.log('Promise.race 結果 (成功):', result);
})
.catch(error => {
  console.error('Promise.race 結果 (失敗):', error.message); // Fast Fail
});


console.log('\n--- Promiseチェーンでの値の変換と伝播 ---');

function step1(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Step 1: ${input} を受け取りました`);
      resolve(input * 2); // 値を2倍にして次のPromiseに渡す
    }, 300);
  });
}

function step2(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Step 2: ${input} を受け取りました`);
      resolve(input + 10); // 値に10を加えて次のPromiseに渡す
    }, 200);
  });
}

function step3(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Step 3: ${input} を受け取りました`);
      resolve(`最終結果: ${input}`); // 文字列に変換して最終結果とする
    }, 100);
  });
}

step1(5)
  .then(result1 => step2(result1)) // result1 (10) が step2 に渡される
  .then(result2 => step3(result2)) // result2 (20) が step3 に渡される
  .then(finalResult => {
    console.log('Promiseチェーン完了:', finalResult); // 最終結果: 30
  })
  .catch(error => {
    console.error('Promiseチェーンエラー:', error.message);
  });


console.log('\n--- async/await を使った Promise の簡潔な利用例 ---');

async function fetchUserData(userId) {
  console.log(`ユーザーデータ取得中: ${userId}...`);
  try {
    // 擬似的なAPI呼び出し
    const response = await new Promise(resolve => setTimeout(() => {
      resolve({ id: userId, name: `ユーザー${userId}`, email: `user${userId}@example.com` });
    }, 700));
    console.log('ユーザーデータ取得成功:', response);
    return response;
  } catch (error) {
    console.error('ユーザーデータ取得失敗:', error.message);
    throw error; // エラーを再スロー
  }
}

// async 関数を呼び出す
fetchUserData(123);
fetchUserData(456).catch(e => console.error('外部でキャッチ:', e.message)); // エラーハンドリングの例
