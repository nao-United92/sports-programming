/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export const throttle = (func, wait) => {
  let inThrottle = false;
  let lastArgs = null;
  let lastThis = null;

  return function(...args) {
    lastArgs = args;
    lastThis = this;

    if (!inThrottle) {
      inThrottle = true;
      func.apply(lastThis, lastArgs);
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
};