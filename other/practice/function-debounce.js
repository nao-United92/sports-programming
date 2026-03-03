/**
 * Creates a debounced version of a function.
 * @param {Function} fn
 * @param {number} ms
 * @returns {Function} The debounced function.
 */
const debounce = (fn, ms) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

module.exports = debounce;
