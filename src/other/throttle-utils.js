/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations.
 *
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait = 0) {
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let result;
  let lastCallTime = 0;

  function throttled(...args) {
    const now = Date.now();
    if (!lastCallTime) {
      lastCallTime = now;
    }

    const remaining = wait - (now - lastCallTime);
    lastArgs = args;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCallTime = now;
      result = func.apply(lastThis, lastArgs);
      if (!timeoutId) {
        lastArgs = lastThis = null;
      }
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        timeoutId = null;
        result = func.apply(lastThis, lastArgs);
        if (!timeoutId) {
          lastArgs = lastThis = null;
        }
      }, remaining);
    }
    return result;
  }

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    lastCallTime = 0;
    timeoutId = lastArgs = lastThis = null;
  };

  return throttled;
}
