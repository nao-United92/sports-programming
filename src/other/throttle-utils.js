/**
 * Creates a throttled function that only invokes `func` at most once per every `delay` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 * @param {Function} func The function to throttle.
 * @param {number} delay The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, delay) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let lastResult;
  let lastCallTime = 0; // 最後に func が実行された時刻
  let trailingCallScheduled = false;

  const throttled = function(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    // 最後に実行されてから delay 以上経過している場合、即座に実行 (leading edge)
    if (now - lastCallTime >= delay) {
      lastCallTime = now;
      lastResult = func.apply(lastThis, lastArgs);
      trailingCallScheduled = false; // leading edge で実行されたので trailing は不要
    } else if (!trailingCallScheduled) {
      // delay 期間中で、かつ trailing 呼び出しがまだスケジュールされていない場合、スケジュール (trailing edge)
      trailingCallScheduled = true;
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now(); // trailing 呼び出しが実行された時刻を記録
        lastResult = func.apply(lastThis, lastArgs);
        timeoutId = null; // 実行後、timeoutId をクリア
        trailingCallScheduled = false; // trailing 呼び出しが完了
      }, delay - (now - lastCallTime)); // 残りの delay 時間後に実行
    }
    return lastResult;
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastCallTime = 0;
    trailingCallScheduled = false;
  };

  throttled.flush = () => {
    if (trailingCallScheduled && timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      lastCallTime = Date.now();
      lastResult = func.apply(lastThis, lastArgs);
      trailingCallScheduled = false;
    }
    return lastResult;
  };

  return throttled;
}

module.exports = { throttle };
