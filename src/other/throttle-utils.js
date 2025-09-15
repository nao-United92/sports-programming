/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait, options = {}) {
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let result;
  let previous = 0;
  const { leading = false, trailing = true } = options;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;

  function throttled(...args) {
    const now = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }

    const remaining = wait - (now - previous);
    lastArgs = args;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      previous = now;
      result = func.apply(lastThis, lastArgs);
      if (!timeoutId) {
        lastArgs = null;
        lastThis = null;
      }
    } else if (!timeoutId && trailing !== false) {
      timeoutId = setTimeout(later, remaining);
    }

    return result;
  }

  function later() {
    const now = Date.now();
    const last = now - previous;

    if (last < wait && last >= 0) {
      timeoutId = setTimeout(later, wait - last);
    } else {
      timeoutId = null;
      if (trailing !== false) {
        previous = leading === false ? 0 : Date.now();
        result = func.apply(lastThis, lastArgs);
        if (!timeoutId) {
          lastArgs = null;
          lastThis = null;
        }
      }
    }
  }

  throttled.cancel = function() {
    clearTimeout(timeoutId);
    previous = 0;
    timeoutId = null;
    lastArgs = null;
    lastThis = null;
  };

  throttled.flush = function() {
    if (!timeoutId) {
      return result;
    }

    clearTimeout(timeoutId);
    timeoutId = null;
    previous = leading === false ? 0 : Date.now();
    result = func.apply(lastThis, lastArgs);

    if (!timeoutId) {
        lastArgs = null;
        lastThis = null;
    }

    return result;
  };

  return throttled;
}
