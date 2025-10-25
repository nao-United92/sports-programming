
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
const debounce = (func, wait) => {
  let timeout;

  if (typeof func !== 'function') {
    throw new Error('First argument must be a function.');
  }

  if (typeof wait !== 'number') {
    throw new Error('Second argument must be a number.');
  }

  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

module.exports = { debounce };
