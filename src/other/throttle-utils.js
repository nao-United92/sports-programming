
/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
const throttle = (func, wait) => {
  let inThrottle = false;
  let lastArgs = null;
  let lastThis = null;
  let timeoutId = null;

  const later = () => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
      timeoutId = setTimeout(later, wait);
    } else {
      timeoutId = null;
      inThrottle = false;
    }
  };

  return function(...args) {
    lastArgs = args;
    lastThis = this;
    if (!inThrottle) {
      inThrottle = true;
      later();
    }
  };
};

module.exports = { throttle };
