
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

  if (typeof func !== 'function') {
    throw new Error('First argument must be a function.');
  }

  if (typeof wait !== 'number') {
    throw new Error('Second argument must be a number.');
  }

  return function(...args) {
    lastArgs = args;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
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

module.exports = { throttle };
