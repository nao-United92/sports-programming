/**
 * 指定したミリ秒数だけ処理を遅延させ、指定された値を返します。
 * @param {number} ms - 遅延させるミリ秒数。
 * @param {*} [value] - 遅延後に解決される値。
 * @returns {Promise<*>} 指定時間後に指定された値で解決するPromise。
 */
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} limit The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

module.exports = { delay, debounce, throttle, cancellableDelay };

/**
 * Creates a cancellable delay.
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {{promise: Promise, cancel: function}} An object containing the promise and a cancel function.
 */
function cancellableDelay(ms) {
  let timeoutId;
  let rejectFn;

  const promise = new Promise((resolve, reject) => {
    rejectFn = reject;
    timeoutId = setTimeout(resolve, ms);
  });

  const cancel = () => {
    clearTimeout(timeoutId);
    rejectFn(new Error('Delay cancelled'));
  };

  return { promise, cancel };
}