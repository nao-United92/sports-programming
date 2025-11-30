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
  let timeoutId;
  let lastArgs;
  let lastThis;
  let result;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // Set timeoutId to null so we know it's not running
      timeoutId = null;
      result = func.apply(lastThis, lastArgs);
    }, wait);

    return result;
  }

  debounced.cancel = function() {
    clearTimeout(timeoutId);
    timeoutId = null;
  };

  debounced.flush = function() {
    if (timeoutId) {
      debounced.cancel();
      result = func.apply(lastThis, lastArgs);
    }
    return result;
  };

  return debounced;
}

module.exports = {
  debounce,
};
