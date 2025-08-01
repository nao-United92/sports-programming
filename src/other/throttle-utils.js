/**
 * Throttles a function, ensuring it's called at most once within a specified time period.
 * Useful for limiting the rate of events like scroll, resize, or mousemove.
 *
 * @param {Function} func The function to throttle.
 * @param {number} limit The time in milliseconds to throttle invocations to.
 * @param {Object} [options] Options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} The throttled function.
 */
export function throttle(func, limit, options = {}) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  let lastResult;
  let lastCallTime = 0;

  const { leading = true, trailing = true } = options;

  const invokeFunc = (time) => {
    lastResult = func.apply(lastThis, lastArgs);
    lastCallTime = time;
  };

  const throttled = function(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    const remaining = limit - (now - lastCallTime);

    if (remaining <= 0 || remaining > limit) {
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

  return throttled;
}
