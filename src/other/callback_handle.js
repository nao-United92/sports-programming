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
