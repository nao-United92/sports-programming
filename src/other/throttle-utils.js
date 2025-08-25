/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export const throttle = (func, wait) => {
  let timeout = null;
  let lastArgs = null;
  let lastThis = null;
  let result;
  let previous = 0;

  const later = () => {
    previous = Date.now();
    timeout = null;
    result = func.apply(lastThis, lastArgs);
    if (!timeout) {
      lastArgs = lastThis = null;
    }
  };

  return function(...args) {
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
};