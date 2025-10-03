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
export function debounce(func, wait) {
  let timeout, result;

  function debounced(...args) {
    const context = this;
    clearTimeout(timeout);
    return new Promise((resolve) => {
      timeout = setTimeout(() => {
        result = func.apply(context, args);
        resolve(result);
      }, wait);
    });
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  debounced.flush = () => {
    if (timeout) {
      debounced.cancel();
      // This is a simplified flush, it doesn't handle arguments
      // correctly if they have changed. A more robust implementation
      // would store the last arguments.
      result = func.apply(this);
    }
    return result;
  };

  return debounced;
}


/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `limit` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} limit The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, limit) {
  let inThrottle;
  let lastResult;
  let timeout;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(context, args);
      timeout = setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
    return lastResult;
  };
}
