// src/other/event-utils.js

/**
 * Creates a throttled function that only invokes `func` at most once per `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations
 * and a `flush` method to immediately invoke them. Provide `options` to indicate whether
 * `func` should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * The `func` is invoked with the last arguments provided to the throttled function.
 * Subsequent calls to the throttled function return the result of the last `func` invocation.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
const throttle = (func, wait, options = {}) => {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;
  let lastCallTime = 0;

  const leading = options.leading === undefined ? true : !!options.leading;
  const trailing = options.trailing === undefined ? true : !!options.trailing;

  const invokeFunc = (time) => {
    lastCallTime = time;
    result = func.apply(lastThis, lastArgs);
    timeoutId = null;
  };

  const throttled = (...args) => {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    const remaining = wait - (now - lastCallTime);

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCallTime = now;
      result = func.apply(lastThis, lastArgs);
    } else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        timeoutId = null;
        result = func.apply(lastThis, lastArgs);
      }, remaining);
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
  throttle,
};
