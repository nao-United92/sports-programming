/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {object} [options={}] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait, options = {}) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let lastResult;
  let lastCallTime = 0;
  let leading = 'leading' in options ? !!options.leading : true;
  let trailing = 'trailing' in options ? !!options.trailing : true;

  const invokeFunc = (time) => {
    lastResult = func.apply(lastThis, lastArgs);
    lastCallTime = time;
  };

  const throttled = function(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastCallTime && !leading) {
      lastCallTime = now; // Initialize lastCallTime for trailing edge only
    }

    const remaining = wait - (now - lastCallTime);

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCallTime = now;
      invokeFunc(now);
    } else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        timeoutId = null;
        invokeFunc(lastCallTime);
      }, remaining);
    }
    return lastResult;
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastCallTime = 0;
  };

  throttled.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      lastCallTime = Date.now();
      invokeFunc(lastCallTime);
    }
    return lastResult;
  };

  return throttled;
}