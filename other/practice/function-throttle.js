/**
 * Creates a throttled version of a function.
 * @param {Function} fn
 * @param {number} ms
 * @returns {Function} The throttled function.
 */
const throttle = (fn, ms) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= ms) {
      lastCall = now;
      fn(...args);
    }
  };
};

module.exports = throttle;
