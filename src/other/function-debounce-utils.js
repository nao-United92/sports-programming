/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
function debounce(func, wait) {
  let timeout;
  let result;
  let lastArgs;
  let lastThis;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    clearTimeout(timeout);
    timeout = setTimeout(flush, wait);

    return result;
  }

  function flush() {
    result = func.apply(lastThis, lastArgs);
    lastArgs = lastThis = null; // Clear references
  }

  function cancel() {
    clearTimeout(timeout);
    timeout = lastArgs = lastThis = null;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;

  return debounced;
}

module.exports = {
  debounce,
};
