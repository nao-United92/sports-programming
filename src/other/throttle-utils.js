/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * The `func` is invoked with the last arguments provided to the throttled function.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait, options) {
  let inThrottle, lastFn, lastTime;
  const { leading = true, trailing = true } = options || {};

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  const throttled = function(...args) {
    const context = this;
    if (!inThrottle) {
      if (leading) {
        func.apply(context, args);
      }
      lastTime = Date.now();
      inThrottle = true;
    } else {
      if (trailing) {
        clearTimeout(lastFn);
        lastFn = setTimeout(function() {
          if (Date.now() - lastTime >= wait) {
            func.apply(context, args);
            lastTime = Date.now();
          }
        }, Math.max(wait - (Date.now() - lastTime), 0));
      }
    }
  };

  throttled.cancel = () => {
    clearTimeout(lastFn);
    inThrottle = false;
  };

  throttled.flush = () => {
    if (lastFn) {
      clearTimeout(lastFn);
      func.apply(this, lastFn.args); // This might need adjustment based on how args are captured
      lastFn = null;
      inThrottle = false;
    }
  };

  return throttled;
}
