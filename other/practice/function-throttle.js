/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, wait, options = {}) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;
  let lastCallTimestamp = 0; // The timestamp of the last *actual* function invocation
  let callCount = 0; // Added for debugging in tests, can be removed in production

  const leading = 'leading' in options ? !!options.leading : true;
  const trailing = 'trailing' in options ? !!options.trailing : true;

  // Function to actually invoke `func`
  const invokeFunc = (time) => {
    result = func.apply(lastThis, lastArgs);
    lastCallTimestamp = time;
    callCount++;
  };

  const throttled = function (...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    const remaining = wait - (now - lastCallTimestamp);

    if (remaining <= 0 || remaining > wait) {
      // If sufficient time has passed or system clock changed significantly
      // (or it's the very first call)
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      if (leading) {
        invokeFunc(now);
      } else if (trailing && !timeoutId) { // Ensures trailing call if no leading
        timeoutId = setTimeout(() => {
          invokeFunc(Date.now());
          timeoutId = null;
        }, wait);
      }
    } else if (!timeoutId && trailing) {
      // If we haven't invoked func yet and are in the cooldown period,
      // schedule a trailing invocation
      timeoutId = setTimeout(() => {
        invokeFunc(Date.now());
        timeoutId = null;
      }, remaining);
    }

    return result;
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastCallTimestamp = 0;
    callCount = 0;
  };
  
  throttled.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      invokeFunc(Date.now());
    }
    return result;
  };

  return throttled;
}

module.exports = {
  throttle,
};
