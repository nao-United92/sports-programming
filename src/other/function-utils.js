// src/other/function-utils.js

/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds
 * have passed since the last time the debounced function was invoked.
 * The debounced function comes with a `cancel` method to cancel delayed `func` invocations
 * and a `flush` method to immediately invoke them. Provide `options` to indicate whether
 * `func` should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * The `func` is invoked with the last arguments provided to the debounced function.
 * Subsequent calls to the debounced function return the result of the last `func` invocation.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 */
const debounce = (func, wait, options = {}) => {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;
  let lastCallTime = 0;

  const leading = options.leading === undefined ? false : !!options.leading;
  const trailing = options.trailing === undefined ? true : !!options.trailing;

  const invokeFunc = (time) => {
    const callNow = leading && time - lastCallTime >= wait;
    lastCallTime = time;
    if (callNow) {
      result = func.apply(lastThis, lastArgs);
    }
  };

  const throttled = (...args) => {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (leading && now - lastCallTime >= wait) {
      invokeFunc(now);
    } else if (trailing) {
      timeoutId = setTimeout(() => {
        lastCallTime = now;
        result = func.apply(lastThis, lastArgs);
        timeoutId = null;
      }, wait);
    }

    return result;
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastCallTime = 0;
  };

  throttled.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      lastCallTime = Date.now();
      result = func.apply(lastThis, lastArgs);
      timeoutId = null;
    }
    return result;
  };

  return throttled;
};

module.exports = {
  debounce,
};