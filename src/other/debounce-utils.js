/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to wait.
 * @param {boolean} [immediate=false] Specify invoking on the leading edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 */
export function debounce(func, wait, immediate = false) {
  let timeout;
  let result;

  const debounced = function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
