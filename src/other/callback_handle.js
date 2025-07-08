let val = -1;

function timer(callback) {
  setTimeout(function task() {
    val = Math.floor(Math.random() * 11);
    callback(val);
  }, 1000);
}

function operations(val) {
  console.log(val);
}

timer(operations);

// delay
function delay(fn, message, ms) {
  setTimeout(function () {
    fn(message);
  }, ms);
}

delay(console.log, 'こんにちは', 1000);
delay(alert, 'さようなら', 2000);
delay(
  function (message1) {
    console.log(message1);
    delay(
      function (message2) {
        console.log(message2);
      },
      'さらに1秒経ちました。',
      1000
    );
  },
  '1秒経ちました。',
  1000
);

console.log('\n--- エラーファーストコールバックの例 ---');

/**
 * 擬似的な非同期処理（エラーファーストコールバック）
 * @param {boolean} shouldFail - 失敗させるかどうか
 * @param {function(Error|null, string)} callback - コールバック関数 (error, data)
 */
function performAsyncOperation(shouldFail, callback) {
  setTimeout(() => {
    if (shouldFail) {
      callback(new Error('非同期処理が失敗しました。'), null);
    } else {
      callback(null, '非同期処理が成功しました！');
    }
  }, 1000);
}

// 成功パターン
performAsyncOperation(false, (error, data) => {
  if (error) {
    console.error('エラー:', error.message);
  } else {
    console.log('成功:', data);
  }
});

// 失敗パターン
performAsyncOperation(true, (error, data) => {
  if (error) {
    console.error('エラー:', error.message);
  } else {
    console.log('成功:', data);
  }
});

console.log('\n--- イベントリスナーとしてのコールバックの例 ---');

// DOM操作と組み合わせる例（dom_selector.html にボタンを追加することを想定）
// このコードはブラウザ環境で実行されることを前提とします。
document.addEventListener('DOMContentLoaded', () => {
  const eventButton = document.createElement('button');
  eventButton.textContent = 'イベントボタン';
  document.body.appendChild(eventButton);

  // ボタンクリック時のコールバック関数
  eventButton.addEventListener('click', function () {
    console.log('イベントボタンがクリックされました！');
    // this はイベントリスナーが設定された要素（eventButton）を指す
    console.log('イベントターゲット:', this.textContent);
  });
});

console.log('\n--- 配列メソッドでのコールバックの例 ---');

const numbers = [1, 2, 3, 4, 5];

// forEach: 各要素に対してコールバックを実行
numbers.forEach(function (number, index) {
  console.log(`forEach: Index ${index}, Value: ${number}`);
});

// map: 各要素を変換し、新しい配列を返す
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log('map (doubled):', doubledNumbers); // [2, 4, 6, 8, 10]

// filter: 条件に合う要素のみを抽出し、新しい配列を返す
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log('filter (even):', evenNumbers); // [2, 4]

// reduce: 配列の要素を単一の値に集約
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 初期値0
console.log('reduce (sum):', sum); // 15

console.log('\n--- 高階関数 (Higher-Order Function) の例 ---');

/**
 * ログメッセージにプレフィックスを追加する高階関数
 * @param {string} prefix - ログのプレフィックス
 * @returns {function(string)} - プレフィックス付きでログを出力する関数
 */
function createLogger(prefix) {
  return function(message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const appLogger = createLogger('APP');
const errorLogger = createLogger('ERROR');

appLogger('アプリケーションが起動しました。');
errorLogger('致命的なエラーが発生しました！');


console.log('\n--- カスタムイベントエミッターの例 ---');

/**
 * シンプルなイベントエミッター
 */
class EventEmitter {
  constructor() {
    this.events = {}; // イベント名とコールバック関数のマップ
  }

  /**
   * イベントリスナーを登録する
   * @param {string} eventName - イベント名
   * @param {function} callback - 実行するコールバック関数
   */
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    console.log(`イベント '${eventName}' にリスナーを登録しました。`);
  }

  /**
   * イベントを発火させる
   * @param {string} eventName - 発火させるイベント名
   * @param {...any} args - コールバック関数に渡す引数
   */
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      console.log(`イベント '${eventName}' を発火します。`);
      this.events[eventName].forEach(callback => {
        callback(...args);
      });
    }
    else {
      console.log(`イベント '${eventName}' のリスナーはありません。`);
    }
  }

  /**
   * イベントリスナーを削除する
   * @param {string} eventName - イベント名
   * @param {function} callback - 削除するコールバック関数
   */
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
      console.log(`イベント '${eventName}' からリスナーを削除しました。`);
    }
  }
}

const myEmitter = new EventEmitter();

// イベントリスナーを登録
const greetListener = (name) => console.log(`こんにちは、${name}さん！`);
const farewellListener = (name) => console.log(`さようなら、${name}さん！`);

myEmitter.on('greet', greetListener);
myEmitter.on('farewell', farewellListener);
myEmitter.on('greet', (name) => console.log(`[追加] ${name}さん、ようこそ！`));

// イベントを発火
myEmitter.emit('greet', '太郎');
myEmitter.emit('farewell', '花子');
myEmitter.emit('unknownEvent'); // リスナーがないイベント

// リスナーを削除して再度発火
myEmitter.off('greet', greetListener);
myEmitter.emit('greet', '次郎'); // greetListenerは呼び出されない
