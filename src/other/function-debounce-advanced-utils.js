/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds
 * have elapsed since the last time the debounced function was invoked. The debounced
 * function comes with a `cancel` method to cancel delayed `func` invocations and a `flush`
 * method to immediately invoke them.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {boolean} [immediate=false] Specify invoking on the leading edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 */
export function debounce(func, wait, immediate = false) {
  let timeout;
  let result;
  let lastArgs;
  let lastThis;

  const later = function() {
    timeout = null;
    if (!immediate) {
      result = func.apply(lastThis, lastArgs);
    }
  };

  const debounced = function(...args) {
    lastArgs = args;
    lastThis = this;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(lastThis, lastArgs);
    }

    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  debounced.flush = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
      result = func.apply(lastThis, lastArgs);
    }
    return result;
  };

  return debounced;
}
