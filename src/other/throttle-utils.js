
/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait) {
  let timeout = null;
  let lastArgs = null;
  let lastThis = null;
  let result;
  let previous = 0;

  function later() {
    previous = Date.now();
    timeout = null;
    result = func.apply(lastThis, lastArgs);
    if (!timeout) {
      lastArgs = lastThis = null;
    }
  }

  const throttled = function(...args) {
    const now = Date.now();
    if (!previous) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(lastThis, lastArgs);
      if (!timeout) {
        lastArgs = lastThis = null;
      }
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = () => {
    clearTimeout(timeout);
    previous = 0;
    timeout = lastArgs = lastThis = null;
  };

  throttled.flush = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
      later();
    }
    return result;
  };

  return throttled;
};
