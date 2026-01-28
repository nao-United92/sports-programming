/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 */
function debounce(func, wait, options = {}) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;
  let lastCallTime = 0; // Not used in this simplified version
  let invokeImmediately = false;

  const leading = !!options.leading;
  const trailing = 'trailing' in options ? !!options.trailing : true;

  const invokeFunc = (time) => {
    result = func.apply(lastThis, lastArgs);
    return result;
  };

  const debounced = function (...args) {
    lastArgs = args;
    lastThis = this;
    
    // Determine if we should invoke immediately (leading edge)
    const callNow = leading && !timeoutId;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // If trailing is true and not leading (or if leading was true but no immediate call happened)
      if (trailing && (!leading || !callNow)) {
        invokeFunc();
      }
      timeoutId = null; // Clear the timeout ID after it runs
    }, wait);

    if (callNow) {
      invokeFunc();
    }

    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
  };

  debounced.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      invokeFunc(); // Invoke immediately
    }
    return result;
  };

  return debounced;
}

module.exports = {
  debounce,
};