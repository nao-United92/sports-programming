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
