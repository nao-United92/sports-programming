/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked. The debounced function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 */
export function debounce(func, wait, options = {}) {
  let timeout;
  let result;
  let lastArgs;
  let lastThis;
  let maxWait;
  let lastCallTime;

  const { leading = false, trailing = true } = options;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  wait = +wait || 0;

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastCallTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastCallTime = time;
    // Start the timer for the trailing edge.
    timeout = setTimeout(timerExpired, wait);
    // Invoke the leading function.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeWaiting = wait - timeSinceLastCall;

    return timeWaiting;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0));
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timeout = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timeout = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been debounced at
    // least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    lastCallTime = undefined;
    lastArgs = lastThis = undefined;
  }

  function flush() {
    return timeout === undefined ? result : trailingEdge(Date.now());
  }

  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeout === undefined) {
        return leadingEdge(lastCallTime);
      }
    }
    if (timeout === undefined) {
      timeout = setTimeout(timerExpired, wait);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;

  return debounced;
}