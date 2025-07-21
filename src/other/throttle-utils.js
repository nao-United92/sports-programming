/**
 * Throttles a function, ensuring it's called at most once within a specified time frame.
 * Useful for limiting the rate of events like scroll or resize, preventing excessive function calls.
 *
 * @param {Function} func The function to throttle.
 * @param {number} limit The time in milliseconds to throttle calls.
 * @returns {Function} The throttled function.
 */
export function throttle(func, limit) {
  let inThrottle;
  let lastResult;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(context, args);
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
    return lastResult;
  };
}
