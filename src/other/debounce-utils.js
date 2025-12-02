/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was invoked.
 * The debounced function comes with a `cancel` method to cancel delayed `func`
 * invocations and a `flush` method to immediately invoke them.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
export const debounce = (func, wait) => {
  let timeout;
  let lastArgs;
  let lastThis;
  let result;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
    return result;
  }

  function later() {
    timeout = null;
    result = func.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  }

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = lastArgs = lastThis = null;
  };

  debounced.flush = function() {
    if (timeout) {
      clearTimeout(timeout);
      later();
    }
    return result;
  };

  return debounced;
};
