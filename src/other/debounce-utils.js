/**
 * Debounces a function, delaying its execution until after a specified time has passed since the last invocation.
 * Useful for limiting the rate at which a function is called, especially for events like window resizing, scrolling, or typing.
 *
 * @param {Function} func The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @param {boolean} [immediate=false] If true, func is invoked immediately, otherwise invoked after delay.
 * @returns {Function} The debounced function.
 */
export function debounce(func, delay, immediate = false) {
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
    timeout = setTimeout(later, delay);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
